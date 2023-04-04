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
                    <h1>Lista de Guias</h1>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    {/* <Link to={'/database/new'}>
                        <Button variant="success">
                            Añadir nueva pregunta
                        </Button>
                    </Link> */}
                </Col>
            </Row>

            <Row>
                <Col>
                    <ul className="list-group">
                        {guias.map(guia => (
                            <li key={guia.id} className="list-group-item">
                                <Link
                                    to={{
                                        pathname: `/database/${guia.id}`,
                                        state: { id: guia.id }
                                    }}>
                                    <h2>{guia.Unidad}</h2>
                                    <p>{guia.Guia}</p>
                                </Link>

                                <div className="d-flex align-items-center">
                                    <Link
                                        to={{
                                            pathname: `/database/${guia.id}`,
                                            state: { id: guia.id }
                                        }}>
                                        <FaEdit />
                                    </Link>

                                    <button className="btn btn-link" onClick={() => handleDelete(guia.id)}>
                                        <FaTrash />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default List;
