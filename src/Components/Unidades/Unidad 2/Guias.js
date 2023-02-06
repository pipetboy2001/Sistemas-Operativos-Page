import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
/*Pdf viewer */
import PdfViewer from "../../PdfView";
import Accordion from "react-bootstrap/Accordion";

function Guia() {
  const [key, setKey] = useState("Guia4");

  return (
    <>
      <center><h1>Guias Unidad 2</h1></center>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Guia4" title="Guia 4">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Ver Pdf
              </Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13ck-x05Wj4HXTkG8xXherUsi5zkevfvu/preview" />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Pregunta 1 - ventajas tiene el uso de hebra por sobre el uso de procesos.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Pregunta 2 - ¿Qué problema potencial puede detectar en el código?
              </Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Pregunta 3 - Para la siguiente programa:
              </Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Pregunta 4 - Explique por qué se da este comportamiento.
              </Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </Tab>

        <Tab eventKey="Guia5" title="Guia 5">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ver Pdf</Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13cbDzA_kLBrGY10nIYmWM4yAr2lxkUnP/preview" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Pregunta 1 - ¿Es la solución deadlock-free?</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Pregunta 2 - El
                comportamiento descrito es para ambos sentidos. ...</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Pregunta 3 - ¿¿Se provee
                exclusión mutua a través de las funciones lock y unlock?</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Pregunta 4 - ¿Es posible que una solución basada en monitores a un problema de EM produzca
                deadlock?</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Pregunta 5 - vez. Escriba las
funciones usando semáforos , evitando inhanición y busy-waiting.?</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>Pregunta 6 -100 reos</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>Pregunta 7 - ¿Qué es lo que se muestra por
                pantalla?</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>Pregunta 8 - modificando el código para que arroje la
                siguiente salida siempre</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">

              <Accordion.Header>Pregunta 9 - resolver el problema de
                concurrencia y no la lógica detrás de la cola</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="10">
              <Accordion.Header>Pregunta 10 - analice el siguiente código de
                una fila de enteros</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="11">
              <Accordion.Header>Pregunta 11 - Coordine a los autos utilizando semáforos y
                evite que ocurra deadlock</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="12">
              <Accordion.Header>Pregunta 12 - ¿Es posible que ocurra deadlock cuando los recursos compartidos son
                consumibles?</Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>
            
          </Accordion>
        </Tab>

        <Tab eventKey="GuiaExtra" title="Guia Extra">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ver Pdf</Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13c2rjWsrqxPNBoX6rEoq1OLSAjts9VEE/preview" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Pregunta 1 - </Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey="Trabajo1" title="Trabajo en clases 1">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ver Pdf</Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13bFk4jlqaP5GQwLnTD8AeLhRF6lHjECX/preview" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Pregunta 1 - </Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey="Trabajo2" title="Trabajo en clases 2">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ver Pdf</Accordion.Header>
              <Accordion.Body>
                <PdfViewer src="https://drive.google.com/file/d/13asC_EIkU4d8dWmZzkseI64vGaxx2KA8/preview" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Pregunta 1 - </Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

      </Tabs>
    </>
  );
}

export default Guia;
