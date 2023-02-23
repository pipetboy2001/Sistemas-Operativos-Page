import React from "react";
import { Card } from "react-bootstrap";
import { FaLaptop, FaExternalLinkAlt } from "react-icons/fa";

const temas = [
  {
    nombre: "Introducción a los SOs",
    descripcion: "Revisión de sistemas computacionales e interrupciones",
    imagen: "ruta/a/imagen1.png",
    url: "/tema1",
  },
  {
    nombre: "Procesos: El concepto de proceso",
    descripcion: "Descripción, control, creación, comunicación y sincronización de procesos, manejo en Linux, virtualización y contenedores",
    imagen: "ruta/a/imagen2.png",
    url: "/tema2",
  },
  {
    nombre: "Planificación del procesador",
    descripcion: "Algoritmos de planificación y planificación multiprocesador",
    imagen: "ruta/a/imagen3.png",
    url: "/tema3",
  },
];

const TemasCard = () => {
  return (
    <div>
      <center><h1><FaLaptop /> Unidad 1</h1></center>
      <div className="row">
        {temas.map((tema, index) => (
          <div className="col-sm-4 mb-4" key={index}>
            <Card style={{ maxWidth: "20rem", margin: "auto" }}>
              <Card.Img variant="top" src={tema.imagen} />
              <Card.Body>
                <Card.Title>{tema.nombre}</Card.Title>
                <Card.Text>{tema.descripcion}</Card.Text>
                <a href={tema.url}>
                  Ver más <FaExternalLinkAlt />
                </a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemasCard;
