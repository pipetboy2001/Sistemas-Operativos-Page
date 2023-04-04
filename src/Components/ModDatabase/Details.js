import React, { useState, useEffect } from 'react';
import firebase from '../../Database/firebase';
import { deletePregunta } from '../../Database/firebase';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import EditPreguntaModal from './EditPreguntaModal';

function GuiaDetail() {
    const [guia, setGuia] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [selectedPreguntaIndex, setSelectedPreguntaIndex] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const doc = await firebase.db.collection('Guias').doc(id).get();
            if (doc.exists) {
                setGuia(doc.data());
                console.log(doc.data());
            } else {
                console.log('No such document!');
            }
        };
        fetchData();
    }, [id]);

    const handleShowModal = (index) => {
        setSelectedPreguntaIndex(index);
        setShowModal(true);
    };

    const handleHideModal = () => {
        setSelectedPreguntaIndex(null);
        setShowModal(false);
    };

    const handleUpdatePregunta = async (index, updatedPregunta) => {
        const updatedPreguntas = [...guia.preguntas];
        updatedPreguntas[index] = updatedPregunta;

        await firebase.db.collection('Guias').doc(id).update({
            preguntas: updatedPreguntas,
        });

        setGuia({ ...guia, preguntas: updatedPreguntas });
    };

    const handleDeletePregunta = async (index) => {
        const updatedPreguntas = [...guia.preguntas];
        updatedPreguntas.splice(index, 1);

        await firebase.db.collection('Guias').doc(id).update({
            preguntas: updatedPreguntas,
        });

        setGuia({ ...guia, preguntas: updatedPreguntas });
    };

    


    return (
        <Container>
            <Row className="mb-4">
                <Col>
                    <h1>Detalles de la {guia.Guia}</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2>Unidad: {guia.Unidad}</h2>
                    <h3>Preguntas:</h3>
                    <ul>
                        {guia.preguntas &&
                            guia.preguntas.map((pregunta, index) => (
                                <li key={index}>
                                    <h4>{pregunta.pregunta}</h4>
                                    <p>{pregunta.respuesta}</p>
                                    {pregunta.imagen && (
                                        <img src={pregunta.imagen} alt="Imagen de la pregunta" />
                                    )}
                                    {pregunta.code && (
                                        <pre>
                                            <code>{pregunta.code}</code>
                                        </pre>
                                    )}
                                    <Button
                                        variant="secondary"
                                        onClick={() => handleShowModal(index)}
                                    >
                                        Editar
                                    </Button>
                                    <Button variant="danger" onClick={() => handleDeletePregunta(index)}>Eliminar</Button>



                                </li>
                            ))}
                    </ul>
                </Col>
            </Row>

            {selectedPreguntaIndex !== null && (
                <EditPreguntaModal
                    pregunta={guia.preguntas[selectedPreguntaIndex]}
                    show={showModal}
                    onHide={handleHideModal}
                    onUpdate={(updatedPregunta) =>
                        handleUpdatePregunta(selectedPreguntaIndex, updatedPregunta)
                    }
                />
            )}
        </Container>
    );
}

export default GuiaDetail;
