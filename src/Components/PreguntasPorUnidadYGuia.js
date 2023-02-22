import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import preguntas from '../Json/Guias.json';

function Pregunta({ pregunta }) {
    return (
        <Accordion.Item eventKey={pregunta.id}>
            <Accordion.Header>{pregunta.pregunta}</Accordion.Header>
            <Accordion.Body>
                {pregunta.code && <p>{pregunta.code}</p>}
                {pregunta.pregunta2 && <p>{pregunta.pregunta2}</p>}
                {pregunta.PreguntaImagen && (
                    <p>
                        <img src={pregunta.PreguntaImagen} alt={pregunta.alt} />
                    </p>
                )}
                {pregunta.respuesta && <p>{pregunta.respuesta}</p>}
                {pregunta.imagen && <img src={pregunta.imagen} alt={pregunta.alt} />}
            </Accordion.Body>
        </Accordion.Item>
    );
}

function PreguntasPorUnidadYGuia({ unidad, guia }) {
    const preguntasFiltradas = preguntas.preguntas.filter(
        (pregunta) => pregunta.unidad === unidad && pregunta.guia === guia
    );

    return (
        <Accordion>
            {preguntasFiltradas.map((pregunta) => (
                <Pregunta key={pregunta.id} pregunta={pregunta} />
            ))}
        </Accordion>
    );
}

export default PreguntasPorUnidadYGuia;
