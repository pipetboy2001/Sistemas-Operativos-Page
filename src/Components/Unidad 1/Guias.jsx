import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

/*Pdf viewer */
import PdfViewer from "../PdfView";


function ControlledTabsExample() {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <h1>Hola página 1</h1>

        <PdfViewer src="https://eqpro.es/wp-content/uploads/2018/11/Ejemplo.pdf" />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <h1>Hola página 2</h1>
        <PdfViewer src="https://eqpro.es/wp-content/uploads/2018/11/Ejemplo.pdf" />
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <h1>Hola página 3</h1>
        <PdfViewer src="https://eqpro.es/wp-content/uploads/2018/11/Ejemplo.pdf" />
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;
