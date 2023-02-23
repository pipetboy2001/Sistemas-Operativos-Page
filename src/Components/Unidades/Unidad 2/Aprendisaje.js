import React from "react";
import { Card } from "react-bootstrap";
import { FaLaptop, FaExternalLinkAlt } from "react-icons/fa";

const temas = [
  {
    nombre: "Hebras",
    descripcion: "Hebras versus procesos, multiprocesamiento simétrico, microkernels, manejo de hebras en Linux",
    imagen: "http://2.bp.blogspot.com/_yVRYtifeDcw/SQaTbWTAy3I/AAAAAAAAADY/ZLWSfXFPm8M/s400/Imagen9.png",
    url: "/tema4",
  },
  {
    nombre: "Concurrencia de procesos",
    descripcion: "Principios de concurrencia, exclusión mutua, mecanismos de sincronización: semáforos, monitores, bloqueos mutuos e inanición, sincronización de procesos y hebras en Linux",
    imagen: "https://www.oscarblancarteblog.com/wp-content/uploads/2017/03/1-1.png",
    url: "/tema5",
  },
  {
    nombre: "Deadlock",
    descripcion: "Condiciones necesarias y suficientes, cómo evitar el deadlock, el algoritmo del banquero, detección de deadlock",
    imagen: "https://sistemasoperativosunivia.files.wordpress.com/2014/12/blog5.jpg",
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
