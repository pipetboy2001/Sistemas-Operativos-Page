import React from "react";
import { Card } from "react-bootstrap";
import { FaLaptop, FaExternalLinkAlt } from "react-icons/fa";

const temas = [
  {
    nombre: "Hebras",
    descripcion: "Hebras versus procesos, multiprocesamiento simétrico, microkernels, manejo de hebras en Linux",
    imagen: "ruta/a/imagen1.png",
    url: "/tema4",
  },
  {
    nombre: "Concurrencia de procesos",
    descripcion: "Principios de concurrencia, exclusión mutua, mecanismos de sincronización: semáforos, monitores, bloqueos mutuos e inanición, sincronización de procesos y hebras en Linux",
    imagen: "ruta/a/imagen2.png",
    url: "/tema5",
  },
  {
    nombre: "Deadlock",
    descripcion: "Condiciones necesarias y suficientes, cómo evitar el deadlock, el algoritmo del banquero, detección de deadlock",
    imagen: "ruta/a/imagen3.png",
    url: "/tema6",
  },
];

const TemasCard = () => {
  return (
    <div>
      <center><h1><FaLaptop /> Unidad 2</h1></center>
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
