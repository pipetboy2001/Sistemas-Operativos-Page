import React from "react";
import { Card } from "react-bootstrap";
import { FaLaptop, FaExternalLinkAlt } from "react-icons/fa";
import { Container } from "react-bootstrap";

const temas = [
  {
    nombre: "1 - Introducción a los SOs",
    descripcion: "Revisión de sistemas computacionales e interrupciones",
    imagen: "https://th.bing.com/th/id/OIP.3M_hFd58wNTyibtbituHwQHaDt?pid=ImgDet&rs=1",
    url: "/tema1",
  },
  {
    nombre: "2 - Procesos: El concepto de proceso",
    descripcion: "Descripción, control, creación, comunicación y sincronización de procesos, manejo en Linux, virtualización y contenedores",
    imagen: "https://sites.google.com/site/materiasisoperativo/_/rsrc/1368839777871/unidad-2-administrador-del-proceso-y-del-procesador/2-1-concepto-de-proceso/proceso1.png",
    url: "/tema2",
  },
  {
    nombre: "3 - Planificación del procesador",
    descripcion: "Algoritmos de planificación y planificación multiprocesador",
    imagen: "https://1984.lsi.us.es/wiki-ssoo/images/ssoo/9/93/Procesos.jpg",
    url: "/tema3",
  },
];

const TemasCard = () => {
  return (
    <Container style={{ maxWidth: "1200px" }}>
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
    </Container>
  );
};

export default TemasCard;
