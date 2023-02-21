import React from "react";

import PreguntasPorUnidadYGuia from './../../PreguntasPorUnidadYGuia';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import PdfViewer from "../../PdfView";

function Guia() {

  return (
    <>

      <Tabs defaultActiveKey="Guia 1" id="Guia 1" >
        <Tab eventKey="Guia 1" title="Guia 1">

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Ver Pdf
              </Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13YNJAkjcsgbyzTWNSmThXZ29qaa_TWqi/preview" />
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>

          <PreguntasPorUnidadYGuia unidad="Unidad 1" guia="Guía 1" />
        </Tab>
        <Tab eventKey="Guia 2" title="Guia 2">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Ver Pdf
              </Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13Y9XVWBHWqGPp1HiMWJKsn_9PYXvf_Fe/preview" />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <PreguntasPorUnidadYGuia unidad="Unidad 1" guia="Guía 2" />
        </Tab>

        <Tab eventKey="Guia 3" title="Guia 3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Ver Pdf
              </Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13Y0_QOwK2wEL5Mf7cy3C9SaQuG9k-ccp/preview" />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <PreguntasPorUnidadYGuia unidad="Unidad 1" guia="Guía 3" />
        </Tab>

        
      </Tabs>
    </>
  );
}
export default Guia;
