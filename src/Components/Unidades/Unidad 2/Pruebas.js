import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import PdfViewer from "../../PdfView";
import PreguntasPorUnidadYGuia from './../../PreguntasPorUnidadYGuia';
import { ImEye } from "react-icons/im";
import { GiNotebook } from "react-icons/gi";

const pruebas = [
  { id: "1", title: "Global 2-2022", pdfUrl: "https://drive.google.com/file/d/13YNJAkjcsgbyzTWNSmThXZ29qaa_TWqi/preview", unidad: "Unidad 1", prueba: "Global 2-2022" },
  { id: "2", title: "Acosta 1-2022", pdfUrl: "https://drive.google.com/file/d/13Y9XVWBHWqGPp1HiMWJKsn_9PYXvf_Fe/preview", unidad: "Unidad 1", prueba: "Acosta 1-2022" },
  { id: "3", title: "Rannou 1-2022", pdfUrl: "https://drive.google.com/file/d/13Y0_QOwK2wEL5Mf7cy3C9SaQuG9k-ccp/preview", unidad: "Unidad 1", prueba: "Rannou 1-2022" }
];

function Prueba() {
  return (
    <div>
      <center><h1><GiNotebook />Pruebas Unidad 2</h1></center>
      <Tabs defaultActiveKey={pruebas[0].title} id="pruebas">
        {pruebas.map((prueba) => (
          <Tab key={prueba.id} eventKey={prueba.title} title={prueba.title}>
            <Accordion>
              <Accordion.Item eventKey={prueba.title}>
                <Accordion.Header>Ver Pdf <ImEye /></Accordion.Header>
                <Accordion.Body>
                  <PdfViewer src={prueba.pdfUrl} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <PreguntasPorUnidadYGuia unidad={prueba.unidad} prueba={prueba.prueba} />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default Prueba;
