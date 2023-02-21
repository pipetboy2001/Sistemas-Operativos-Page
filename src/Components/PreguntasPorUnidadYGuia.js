import React from 'react';
import preguntas from '../Json/Guias.json';
import Accordion from "react-bootstrap/Accordion";

function PreguntasPorUnidadYGuia({ unidad, guia }) {
    const preguntasFiltradas = preguntas.preguntas.filter(pregunta =>
        pregunta.unidad === unidad && pregunta.guia === guia
    );

    return (
        <div>
            <Accordion>
                {preguntasFiltradas.map((pregunta, index) => (
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{pregunta.pregunta}</Accordion.Header>
                        <Accordion.Body>{pregunta.respuesta}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}

export default PreguntasPorUnidadYGuia;
