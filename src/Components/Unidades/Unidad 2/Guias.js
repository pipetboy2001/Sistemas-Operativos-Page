import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import PdfViewer from "../../PdfView";
import PreguntasPorUnidadYGuia from './../../PreguntasPorUnidadYGuia';
import { ImEye } from "react-icons/im";
import { GiNotebook } from "react-icons/gi";

const guias = [
  { id: "1", title: "Guia 4", pdfUrl: "https://drive.google.com/file/d/13ck-x05Wj4HXTkG8xXherUsi5zkevfvu/preview", unidad: "Unidad 2", guia: "Guía 4" },
  { id: "2", title: "Guia 5", pdfUrl: "https://drive.google.com/file/d/13cbDzA_kLBrGY10nIYmWM4yAr2lxkUnP/preview", unidad: "Unidad 2", guia: "Guía 5" },
  { id: "3", title: "Guia extra", pdfUrl: "https://drive.google.com/file/d/13c2rjWsrqxPNBoX6rEoq1OLSAjts9VEE/preview", unidad: "Unidad 2", guia: "Guia extra" },
  { id: "4", title: "Trabajo en clases 1", pdfUrl: "https://drive.google.com/file/d/13bFk4jlqaP5GQwLnTD8AeLhRF6lHjECX/preview", unidad: "Unidad 2", guia: "Trabajo en clases 1" },
  { id: "5", title: "Trabajo en clases 2", pdfUrl: "https://drive.google.com/file/d/13asC_EIkU4d8dWmZzkseI64vGaxx2KA8/preview", unidad: "Unidad 2", guia: "Trabajo en clases 2" }
];

function Guia() {
  return (
    <div>
      <center><h1><GiNotebook/> Guias Unidad 2</h1></center>
      <Tabs className="mx-auto w-75" defaultActiveKey={guias[0].title} id="guias">
        {guias.map((guia) => (
          <Tab key={guia.id} eventKey={guia.title} title={guia.title}>
            <Accordion className="mx-auto w-75">
              <Accordion.Item eventKey={guia.title}>
                <Accordion.Header>Ver Pdf <ImEye/></Accordion.Header>
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
