import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function EditPreguntaModal({ show, onHide, pregunta, onUpdate }) {
    const [preguntaEditada, setPreguntaEditada] = useState({
        pregunta: pregunta.pregunta,
        respuesta: pregunta.respuesta,
        imagen: pregunta.imagen,
        code: pregunta.code,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPreguntaEditada((prevState) => ({
            ...prevState,
            [name]: value === undefined ? prevState[name] : value,
        }));
    };


    const handleSave = () => {
        onUpdate(preguntaEditada);
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Editar pregunta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="pregunta">
                        <Form.Label>Pregunta</Form.Label>
                        <Form.Control
                            type="text"
                            name="pregunta"
                            value={preguntaEditada.pregunta}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="respuesta">
                        <Form.Label>Respuesta</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="respuesta"
                            value={preguntaEditada.respuesta}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="imagen">
                        <Form.Label>Imagen (opcional)</Form.Label>
                        <Form.Control
                            type="text"
                            name="imagen"
                            value={preguntaEditada.imagen}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="code">
                        <Form.Label>Código (opcional)</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="code"
                            value={preguntaEditada.code}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditPreguntaModal;
