import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import PdfViewer from "../../PdfView";
import PreguntasPorUnidadYPrueba from "./../../PreguntaPorPrueba";
import { ImEye } from "react-icons/im";
import { GiNotebook } from "react-icons/gi";
import List from "./../../PreguntaPorPrueba";

const pruebas = [
  { id: "1", title: "Global 2-2022", pdfUrl: "https://drive.google.com/file/d/1Oeis1VPzwr5ycNPDwf1jg2B_ctwFKwOU/preview", unidad: "Unidad 1", prueba: "Global 2-2022" },
  { id: "2", title: "Acosta 1-2022", pdfUrl: "https://drive.google.com/file/d/1O_03T2spdcED574ukmkheqU3EUI-Pbsu/preview", unidad: "Unidad 1", prueba: "Acosta 1-2022" },
  { id: "3", title: "Rannou 1-2022", pdfUrl: "", unidad: "Unidad 1", prueba: "Rannou 1-2022" }
];

function Prueba() {
  return (
    <div>
      <center><h1><GiNotebook /> Guias Unidad 1</h1></center>
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
            <PreguntasPorUnidadYPrueba unidad={prueba.unidad} prueba={prueba.prueba}>
              <List unidad={prueba.unidad} prueba={prueba.prueba} />
            </PreguntasPorUnidadYPrueba>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default Prueba;
