import React from "react";
import { Card } from "react-bootstrap";
import { FaLaptop, FaExternalLinkAlt } from "react-icons/fa";
import { Container } from "react-bootstrap";

const temas = [
  {
    nombre: "7 - Sistema de administración de memoria",
    descripcion: "Particionamiento de la memoria física, direccionamiento físico y virtual, paginación, segmentación",
    imagen: "https://lcsistemasoperativos.files.wordpress.com/2015/02/administrador-de-memoria.png",
    url: "/tema7",
  },
  {
    nombre: "8 - Sistemas de archivos",
    descripcion: "Organización y acceso de archivos y directorios, administración almacenamiento secundario, sistemas de archivos en Linux",
    imagen: "https://informaticoalrescate.com/wp-content/uploads/2019/03/sistema-de-archivos-esquema.jpg",
    url: "/tema8",
  },
  {
    nombre: "9 - Administración de dispositivos de I/O",
    descripcion: "Organización de los servicios de I/O, buffering de I/O, planificación de disco, sistemas RAID",
    imagen: "https://arbizo.vivaldi.net/wp-content/uploads/sites/21037/2020/07/IOHw_Intro.png",
    url: "/tema9",
  },
];

const TemasCard = () => {
  return (
      <Container style={{ maxWidth: "1200px" }}>
      <center><h1><FaLaptop /> Unidad 3</h1></center>
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
