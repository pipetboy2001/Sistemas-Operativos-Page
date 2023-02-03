import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
/*Pdf viewer */
import PdfViewer from "../../PdfView";
import Accordion from "react-bootstrap/Accordion";

function Guia() {
  const [key, setKey] = useState("Guia6");

  return (
    <>
      <center><h1>Guias Unidad 3</h1></center>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Guia6" title="Guia 6">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Ver Pdf
              </Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13YNJAkjcsgbyzTWNSmThXZ29qaa_TWqi/preview" />
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

        <Tab eventKey="Guia7" title="Guia 7">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ver Pdf</Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13Y9XVWBHWqGPp1HiMWJKsn_9PYXvf_Fe/preview" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Pregunta 1 - ¿Cuántos procesos crea el siguiente código para MAX = 5?</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>
      </Tabs>
    </>
  );
}

export default Guia;
