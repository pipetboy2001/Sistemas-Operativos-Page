import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import firebase from '../../Database/firebase';
import { Form, Button, Container,Row, Col } from 'react-bootstrap';

function Details() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pregunta, setPregunta] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [newPregunta, setNewPregunta] = useState({
        Guia: '',
        Unidad: '',
        Pregunta: '',
        Respuesta: '',
        Imagen: '',
        Imagen2: '',
    });

    useEffect(() => {
        const getPregunta = async () => {
            const preguntaDoc = await firebase.db.collection("Guias").doc(id).get();
            if (!preguntaDoc.exists) {
                console.log(`No se encontró ninguna pregunta con el ID ${id}`);
                return;
            }
            console.log(preguntaDoc.data());
            const data = preguntaDoc.data();
            setPregunta(data);
        };
        getPregunta();
    }, [id]);

    const handleEditClick = () => {
        setEditMode(true);
        setNewPregunta(pregunta);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPregunta((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSaveClick = async () => {
        try {
            await firebase.db.collection("Guias").doc(id).update(newPregunta);
            setPregunta(newPregunta);
            setEditMode(false);
        } catch (error) {
            console.error("Error actualizando la pregunta: ", error);
        }
    };

    const handleCancelClick = () => {
        setEditMode(false);
    };

    if (editMode) {
        return (
            <div className="container">
                <h1>Editar Pregunta</h1>
                <Form>
                    <Form.Group controlId="formGuia">
                        <Form.Label>Guia</Form.Label>
                        <Form.Control type="text" name="Guia" value={newPregunta.Guia} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formUnidad">
                        <Form.Label>Unidad</Form.Label>
                        <Form.Control type="text" name="Unidad" value={newPregunta.Unidad} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formPregunta">
                        <Form.Label>Pregunta</Form.Label>
                        <Form.Control type="text" name="Pregunta" value={newPregunta.Pregunta} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formRespuesta">
                        <Form.Label>Respuesta</Form.Label>
                        <Form.Control type="text" name="Respuesta" value={newPregunta.Respuesta} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formImagen">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="text" name="Imagen" value={newPregunta.Imagen} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formImagen2">
                        <Form.Label>Imagen2</Form.Label>
                        <Form.Control type="text" name="Imagen2" value={newPregunta.Imagen2} onChange={handleInputChange} />    
                    </Form.Group>
                    
                    <Button variant="primary" onClick={handleSaveClick}>Guardar</Button>
                    <Button variant="secondary" onClick={handleCancelClick}>Cancelar</Button>
                </Form>
            </div>
        );
    }

    return (
        <Container>
            <Row className="mb-4">
                <Col>
                    <h1>Detalles de la pregunta</h1>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    <Button variant="secondary" onClick={() => navigate(-1)}>Volver</Button>
                    <Button variant="primary" onClick={handleEditClick}>Editar</Button>
                    
                </Col>
            </Row>

            <Row>
                <Col>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Guia: </strong>
                            {pregunta.Guia}
                        </li>
                        <li className="list-group-item">
                            <strong>Unidad: </strong>
                            {pregunta.Unidad}
                        </li>
                        <li className="list-group-item">
                            <strong>Pregunta: </strong>
                            {pregunta.Pregunta}
                        </li>
                        <li className="list-group-item">
                            <strong>Respuesta: </strong>
                            {pregunta.Respuesta}
                        </li>
                        <li className="list-group-item">
                            <strong>URL Imagen: </strong>
                            {pregunta.Imagen}
                        </li>
                        <li className="list-group-item">
                            <strong>URL Imagen2: </strong>
                            {pregunta.Imagen2}
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Details;
