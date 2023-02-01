
import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import AOS from "aos";
import "aos/dist/aos.css";



const cardData = [
  {
    imgSrc: "https://i.ytimg.com/vi/Xm9Eah8t0d4/maxresdefault.jpg",
    title: "Unidad 1",
    text: "Intro a SO, procesos, hebras y planificación",
    link1: "/Pruebas/Unidad1",
    link2: "/Guias/Unidad1",
    link3: "/Aprender/Unidad1",
  },
  {
    imgSrc: "https://arctype.com/blog/content/images/2021/02/deadlock.jpeg",
    title: "Unidad 2",
    text: "Concurrencia, sincronización y deadlock",
    link1: "/Pruebas/Unidad2",
    link2: "/Guias/Unidad2",
    link3: "/Aprender/Unidad2",
  },
  {
    imgSrc: "https://i.ytimg.com/vi/Xm9Eah8t0d4/maxresdefault.jpg",
    title: "Unidad 3",
    text: "Gestión de la memoria e IO",
    link1: "/Pruebas/Unidad3",
    link2: "/Guias/Unidad3",
    link3: "/Aprender/Unidad3",
  },
  {
    imgSrc: "https://i.ytimg.com/vi/Xm9Eah8t0d4/maxresdefault.jpg",
    title: "REPASO P.A.",
    text: "Conglomerado de todo",
    link1: "/Pruebas/Repaso",
    link2: "/Guias/Repaso",
    link3: "/Aprender/Repaso",
  },
];

function Home() {
    useEffect(() => {
      AOS.init();
    }, []);


  return (
    <div>
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx} data-aos="fade-up" data-aos-delay={idx * 100} data-aos-offset="200">
                <Card
                    className="small-card"
                    border="secondary"
                >
                    <Card.Header as="h5">{cardData[idx].title}</Card.Header>
                    <Card.Img variant="top" src={cardData[idx].imgSrc} />
                    <Card.Body>
                        <Card.Text>{cardData[idx].text}</Card.Text>
                        <a href={cardData[idx].link1}>
                        <Button variant="primary">Pruebas</Button>
                        </a>
                        <a href={cardData[idx].link2}>
                        <Button variant="primary">Guias</Button>
                        </a>
                        <a href={cardData[idx].link3}>
                        <Button variant="primary">Aprender</Button>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
        ))}
      </Row>
    </div>
  );
}
export default Home;
