import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import PdfViewer from "../../PdfView";
import PreguntasPorUnidadYGuia from './../../PreguntasPorUnidadYGuia';
import { ImEye } from "react-icons/im";
import { GiNotebook } from "react-icons/gi";

const pruebas = [
  { id: "1", title: "Global 1-2023", pdfUrl: "", unidad: "Unidad 3", prueba: "Global 1-2023" },
  { id: "1", title: "Global 2-2022", pdfUrl: "", unidad: "Unidad 3", prueba: "Global 2-2022" },
  { id: "2", title: "Acosta 1-2022", pdfUrl: "https://drive.google.com/file/d/14ELd4eBWidFJex-YkcvJXv9U1H-_R4oX/preview", unidad: "Unidad 3", prueba: "Acosta 1-2022" },
  { id: "3", title: "Rannou 1-2022", pdfUrl: "https://drive.google.com/file/d/1TbG0TXWKp-KnWrhyZGp6mxn1o1US4Nw1/preview", unidad: "Unidad 3", prueba: "Rannou 1-2022" },
  { id: "4", title: "Global 2-2021", pdfUrl: "", unidad: "Unidad 3", prueba: "Global 2-2021" }
];

function Prueba() {
  return (
    <div>
      <center><h1><GiNotebook />Pruebas Unidad 3</h1></center>
      <Tabs className="mx-auto w-75" defaultActiveKey={pruebas[0].title} id="pruebas">
        {pruebas.map((prueba) => (
          <Tab key={prueba.id} eventKey={prueba.title} title={prueba.title}>
            <Accordion className="mx-auto w-75">
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
