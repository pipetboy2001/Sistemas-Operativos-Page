import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Accordion from "react-bootstrap/Accordion";
import PdfViewer from "../PdfView";

function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">2022-2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">20222-1 Acosta</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="three">20222-1 Rannou</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Ver Pdf</Accordion.Header>
                  <Accordion.Body>
                    <PdfViewer src="/src/assets/Unidad1/Guias/Guia1.pdf" />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Pregunta 1</Accordion.Header>
                  <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Ver Pdf</Accordion.Header>
                  <Accordion.Body>
                    <PdfViewer src="/src/assets/Unidad1/Guias/Guia1.pdf" />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Pregunta 1</Accordion.Header>
                  <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
                </Accordion.Item>
                
              </Accordion>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;
