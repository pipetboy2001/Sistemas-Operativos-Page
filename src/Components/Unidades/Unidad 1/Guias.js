import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

/*Pdf viewer */
import PdfViewer from "../../PdfView";
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
            <Accordion.Header>
              Ver Pdf
            </Accordion.Header>
            <Accordion.Body>
              <PdfViewer src="https://eqpro.es/wp-content/uploads/2018/11/Ejemplo.pdf" />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Pregunta 1 - ¿Cuál es la diferencia entre System Call y Procedure
              Call?
            </Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Pregunta 2 - ¿Cuál es la diferencia entre un System Call y un
              cambio de contexto?
            </Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Pregunta 3 - ¿Cuál es la diferencia entre el Kernel Stack y el
              User Stack?
            </Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Pregunta 4 - ¿Qué se almacena en el Heap?
            </Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Pregunta 5 - ¿Qué bandera en EFLAGS para la arquitectura x86 apoya
              el proceso de cambio de contexto?
            </Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Pregunta 6 - Explique las diferencias entre un SO basado en
              procesos y un SO que se ejecuta en el contexto de procesos
              usuarios.
            </Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Pregunta 7 - a dibuje el espacio de direcciones del proceso en el
              momento que se está ejecutando la función void f(char*)
            </Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>
              Pregunta 8 - Cree un esquema donde muestre el proceso que ocurre a
              nivel de proceso usuario y kernel cuando ocurre un syscall
            </Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="9">
            <Accordion.Header>
              Pregunta 9 - ¿En qué segmentos caen las direcciones mostradas por
              pantalla?
            </Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="10">
            <Accordion.Header>
              Pregunta 10 - ¿Qué mecanismos por parte del sistema operativo se
              gatillan cuando corremos el siguiente programa ya compilado a
              través de la bash?
            </Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>

      <Tab eventKey="Guia2" title="Guia 2">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Ver Pdf</Accordion.Header>
            <Accordion.Body>
              <PdfViewer src="https://eqpro.es/wp-content/uploads/2018/11/Ejemplo.pdf" />
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
              <PdfViewer src="https://eqpro.es/wp-content/uploads/2018/11/Ejemplo.pdf" />
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
