import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import cardData from "../Json/Menu.json";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container style={{ maxWidth: "1200px" }}>
      <Row xs={1} md={2} className="g-4">
        {cardData.map((card, idx) => (
          <Col
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            data-aos-offset="200"
          >
            <Card className="small-width-card mx-auto mb-3" border="secondary">
              <Card.Header as="h5">{card.title}</Card.Header>
              <Card.Img className="card-imagen" variant="top" src={card.imgSrc} />
              <Card.Body className="card-body">
                <center><b><Card.Text>{card.text}</Card.Text></b></center>
                <div className="d-flex justify-content-center flex-wrap">
                  {card.hasOwnProperty('link1') && !card.hasOwnProperty('link2') && !card.hasOwnProperty('link3') ? (
                    <a href={card.link1}>
                      <Button className="mx-1" variant="primary">
                        Pruebas
                      </Button>
                    </a>
                  ) : (
                    <>
                      <a href={card.link3}>
                        <Button className="mx-1" variant="primary">
                          Aprender
                        </Button>
                      </a>
                      <a href={card.link2}>
                        <Button className="mx-1" variant="primary">
                          Guias
                        </Button>
                      </a>
                      <a href={card.link1}>
                        <Button className="mx-1" variant="primary">
                          Pruebas
                        </Button>
                      </a>
                    </>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
