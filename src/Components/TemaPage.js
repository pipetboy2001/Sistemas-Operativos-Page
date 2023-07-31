import React from "react";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import { ImEye } from "react-icons/im";
import PdfViewer from "./PdfView";

// Importar los datos desde los archivos JSON
import temas from './../Json/TemasResumenes.json';
import resumenes from './../Json/Resumenes.json';

function TemaPage() {
  const { temaId } = useParams();
  const resumenesPorTema = resumenes.filter((resumen) => resumen.tema === temaId);
  const temaSeleccionado = temas.find((tema) => tema.id === temaId);

  return (
    <div className="container">
      <center><h1>{temaSeleccionado ? temaSeleccionado.nombre : ""}</h1></center>

      {resumenesPorTema.length > 0 ? (
        <Tabs className="mx-auto w-75" defaultActiveKey={resumenesPorTema[0].nombre} id="resumenes">
          {resumenesPorTema.map((resumen) => (
            <Tab key={resumen.id} eventKey={resumen.nombre} title={resumen.nombre}>
              <Accordion className="mx-auto w-75" defaultActiveKey={resumen.nombre}>
                <Accordion.Item eventKey={resumen.nombre}>
                  <Accordion.Header>
                    Ver Pdf <ImEye />
                  </Accordion.Header>
                  <Accordion.Body>
                    <PdfViewer src={resumen.link} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab>
          ))}
        </Tabs>
      ) : (
        <p>No hay resúmenes para este tema</p>
      )}
    </div>
  );
}

export default TemaPage;
