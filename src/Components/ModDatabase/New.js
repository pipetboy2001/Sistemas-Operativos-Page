import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import firebase from '../../Database/firebase';
import { Form, Button } from 'react-bootstrap';

function New() {
    const navigate = useNavigate();
    const [guia, setGuia] = useState('');
    const [pregunta, setPregunta] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [imagen, setImagen] = useState('');
    const [imagen2, setImagen2] = useState('');
    const [unidad, setUnidad] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const newPregunta = {
            Guia: guia,
            Pregunta: pregunta,
            Respuesta: respuesta,
            Imagen: imagen,
            Imagen2: imagen2,
            Unidad: unidad
        };
        await firebase.db.collection("Guias").add(newPregunta);
        navigate("/database");
    };

    return (
        <div className="mx-auto w-75">
            <h1>Añadir una nueva pregunta</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="unidad">
                    <Form.Label>Unidad</Form.Label>
                    <Form.Control type="text" placeholder="Unidad" onChange={e => setUnidad(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="guia">
                    <Form.Label>Guia</Form.Label>
                    <Form.Control type="text" placeholder="Guia" onChange={e => setGuia(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="pregunta">
                    <Form.Label>Pregunta</Form.Label>
                    <Form.Control type="text" placeholder="Pregunta" onChange={e => setPregunta(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="respuesta">
                    <Form.Label>Respuesta</Form.Label>
                    <Form.Control type="text" placeholder="Respuesta" onChange={e => setRespuesta(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="imagen">
                    <Form.Label>Url de imagen</Form.Label>
                    <Form.Control type="text" placeholder="Url de imagen" onChange={e => setImagen(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="imagen2">
                    <Form.Label>Url de imagen 2</Form.Label>
                    <Form.Control type="text" placeholder="Url de imagen 2" onChange={e => setImagen2(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">Añadir pregunta</Button>
            </Form>
        </div>
    );
}

export default New;
