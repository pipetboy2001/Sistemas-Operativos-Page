import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import PdfViewer from "../../PdfView";
import PreguntasPorUnidadYGuia from './../../PreguntasPorUnidadYGuia';

const guias = [
  { id: "1", title: "Guia 1", pdfUrl: "https://drive.google.com/file/d/13YNJAkjcsgbyzTWNSmThXZ29qaa_TWqi/preview", unidad: "Unidad 1", guia: "Guía 1" },
  { id: "2", title: "Guia 2", pdfUrl: "https://drive.google.com/file/d/13Y9XVWBHWqGPp1HiMWJKsn_9PYXvf_Fe/preview", unidad: "Unidad 1", guia: "Guía 2" },
  { id: "3", title: "Guia 3", pdfUrl: "https://drive.google.com/file/d/13Y0_QOwK2wEL5Mf7cy3C9SaQuG9k-ccp/preview", unidad: "Unidad 1", guia: "Guía 3" }
];

function Guia() {
  return (
    <div>
      <center><h1>Guias Unidad 1</h1></center>
    <Tabs defaultActiveKey={guias[0].title} id="guias">
      {guias.map((guia) => (
        <Tab key={guia.id} eventKey={guia.title} title={guia.title}>
          <Accordion>
            <Accordion.Item eventKey={guia.title}>
              <Accordion.Header>Ver Pdf</Accordion.Header>
              <Accordion.Body>
                <PdfViewer src={guia.pdfUrl} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <PreguntasPorUnidadYGuia unidad={guia.unidad} guia={guia.guia} />
        </Tab>
      ))}
    </Tabs>
    </div>
  );
}

export default Guia;
