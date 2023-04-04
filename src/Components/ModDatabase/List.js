import React, { useState, useEffect } from 'react';
import firebase from '../../Database/firebase';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';


function List() {
    const [guias, setGuias] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await firebase.db.collection("Guias").get();
            setGuias(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        await firebase.db.collection("Guias").doc(id).delete();
        setGuias(guias.filter((guia) => guia.id !== id));
    };

    return (
        <Container>
            <Row className="mb-4">
                <Col>
                    <h1>Lista de preguntas</h1>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    <Link to={'/database/new'}>
                        <Button variant="success">
                            Añadir nueva pregunta
                        </Button>
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ul className="list-group">
                        {guias.map(guias => (
                            <li key={guias.id} className="list-group-item">
                                <h2>{guias.Guia}</h2>
                                <p>Unidad: {guias.Unidad}</p>
                                <p>{guias.Pregunta}</p>
                                <p>{guias.Respuesta}</p>

                                <Link
                                    to={{
                                        pathname: `/database/${guias.id}`,
                                        state: { id: guias.id }
                                    }}>
                                    <FaEdit />
                                </Link>

                                <button onClick={() => handleDelete(guias.id)}>
                                    <FaTrash />
                                </button>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default List;
