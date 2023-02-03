import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
/*Pdf viewer */
import PdfViewer from "../../PdfView";
import Accordion from "react-bootstrap/Accordion";

function Guia() {
  const [key, setKey] = useState("Guia4");

  return (
    <>
      <center><h1>Guias Unidad 2</h1></center>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Guia4" title="Guia 4">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Ver Pdf
              </Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13ck-x05Wj4HXTkG8xXherUsi5zkevfvu/preview" />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Pregunta 1 - 
              </Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey="Guia5" title="Guia 5">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ver Pdf</Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13cbDzA_kLBrGY10nIYmWM4yAr2lxkUnP/preview" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Pregunta 1 - ¿Cuántos procesos crea el siguiente código para MAX = 5?</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey="GuiaExtra" title="Guia Extra">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ver Pdf</Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13c2rjWsrqxPNBoX6rEoq1OLSAjts9VEE/preview" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Pregunta 1 - </Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey="Trabajo1" title="Trabajo en clases 1">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ver Pdf</Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13bFk4jlqaP5GQwLnTD8AeLhRF6lHjECX/preview" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Pregunta 1 - </Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey="Trabajo2" title="Trabajo en clases 2">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ver Pdf</Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13asC_EIkU4d8dWmZzkseI64vGaxx2KA8/preview" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Pregunta 1 - </Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

      </Tabs>
    </>
  );
}

export default Guia;
