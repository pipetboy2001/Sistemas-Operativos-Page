import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import firebase from '../Database/firebase';



function PreguntasPorUnidadYPrueba({ unidad, prueba }) {
    const [activeKey, setActiveKey] = useState(null);
    const [preguntas, setPreguntas] = useState([]);


    const handleAccordionChange = (key) => {
        setActiveKey(key);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await firebase.db
                .collection('Pruebas')
                .where('Unidad', '==', unidad)
                .where('Prueba', '==', prueba)
                .get();
            setPreguntas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, [unidad, prueba]);

    const preguntasFiltradas = preguntas.filter(
        (pregunta) => pregunta.Unidad === unidad && pregunta.Prueba === prueba
    );


    return (
        <>
            {preguntasFiltradas.length > 0 && (
                <Accordion className="mx-auto w-75" activeKey={activeKey} onSelect={handleAccordionChange}>
                    {preguntasFiltradas[0].preguntas.map((pregunta, index) => (
                        <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>
                                {pregunta.pregunta}
                            </Accordion.Header>
                            <Accordion.Body>
                                {pregunta.imagenPregunta && (
                                    <img
                                        src={pregunta.imagenPregunta}
                                        alt="Pregunta Imagen"
                                        style={{ maxWidth: '100%', maxHeight: '400px' }}
                                    />
                                )}
                                <p>{pregunta.respuesta}</p>
                                {pregunta.imagenRespuesta && (
                                    <img
                                        src={pregunta.imagenRespuesta}
                                        alt="Respuesta Imagen"
                                        style={{ maxWidth: '100%', maxHeight: '400px' }}
                                    />
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            )}
        </>

    );
}

export default PreguntasPorUnidadYPrueba;


