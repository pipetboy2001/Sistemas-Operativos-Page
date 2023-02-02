import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

/*Pdf viewer */
import PdfViewer from "../PdfView";
import Accordion from "react-bootstrap/Accordion";



function ControlledTabsExample() {
  const [key, setKey] = useState("Guia1");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Guia1" title="Guia 1">
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
      </Tab>

      <Tab eventKey="Guia2" title="Guia 2">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Ver Pdf</Accordion.Header>
            <Accordion.Body>
              <PdfViewer src="/src/assets/Unidad1/Guias/Guia2.pdf" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Pregunta 1</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>

      <Tab eventKey="Guia 3" title="Guia 3">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Ver Pdf</Accordion.Header>
            <Accordion.Body>
              <PdfViewer src="/src/assets/Unidad1/Guias/Guia3.pdf" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Pregunta 1</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;
