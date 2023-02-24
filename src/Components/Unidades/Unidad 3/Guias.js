import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import PdfViewer from "../../PdfView";
import PreguntasPorUnidadYGuia from './../../PreguntasPorUnidadYGuia';
import { ImEye } from "react-icons/im";
import { GiNotebook } from "react-icons/gi";

const guias = [
  { id: "1", title: "Guia 6", pdfUrl: "https://drive.google.com/file/d/13egt47W-yj-9MLqw4DPDCxxmqH-26LZL/preview", unidad: "Unidad 3", guia: "Guía 6" },
];

function Guia() {
  return (
    <div>
      <center><h1><GiNotebook /> Guias Unidad 3</h1></center>
      <Tabs className="mx-auto w-75" defaultActiveKey={guias[0].title} id="guias">
        {guias.map((guia) => (
          <Tab key={guia.id} eventKey={guia.title} title={guia.title}>
            <Accordion className="mx-auto w-75">
              <Accordion.Item eventKey={guia.title}>
                <Accordion.Header>Ver Pdf <ImEye /></Accordion.Header>
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
