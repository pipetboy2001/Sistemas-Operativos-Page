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
  { id: "0", title: "Global 1-2023", pdfUrl: "https://drive.google.com/file/d/17yFrvaBHr_FM-LWP4H7vFzz0d7nDHQzY/preview", unidad: "Unidad 3", prueba: "Global 1-2023" },
  { id: "1", title: "Global 2-2022", pdfUrl: "https://drive.google.com/file/d/1571XU5M8TOUMgPqWa0ZvApa2PVoGLTbT/preview", unidad: "Unidad 3", prueba: "Global 2-2022" },
  { id: "2", title: "Acosta 1-2022", pdfUrl: "https://drive.google.com/file/d/14ELd4eBWidFJex-YkcvJXv9U1H-_R4oX/preview", unidad: "Unidad 3", prueba: "Acosta 1-2022" },
  { id: "3", title: "Rannou 1-2022", pdfUrl: "https://drive.google.com/file/d/1TbG0TXWKp-KnWrhyZGp6mxn1o1US4Nw1/preview", unidad: "Unidad 3", prueba: "Rannou 1-2022" },
  { id: "4", title: "Global 2-2021", pdfUrl: "https://drive.google.com/file/d/14HH6hZ-EE8y3EIOIfqJJh65DqdNp9WNm/preview", unidad: "Unidad 3", prueba: "Global 2-2021" }
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
