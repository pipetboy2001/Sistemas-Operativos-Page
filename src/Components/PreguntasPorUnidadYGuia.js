import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import firebase from '../Database/firebase';



function PreguntasPorUnidadYGuia({ unidad, guia }) {
    const [activeKey, setActiveKey] = useState(null);
    const [preguntas, setPreguntas] = useState([]);


    const handleAccordionChange = (key) => {
        setActiveKey(key);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await firebase.db
                .collection('Guias')
                .where('Unidad', '==', unidad)
                .where('Guia', '==', guia)
                .get();
            setPreguntas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, [unidad, guia]);

    const preguntasFiltradas = preguntas.filter(
        (pregunta) => pregunta.Unidad === unidad && pregunta.Guia === guia
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

export default PreguntasPorUnidadYGuia;


