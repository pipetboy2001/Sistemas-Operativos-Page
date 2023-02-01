import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function ControlledTabsExample() {
  const [key, setKey] = useState("Guia1");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Guia1" title="Guía de ejercicios 1">
        <h1>Hola página 1</h1>
      </Tab>
      <Tab eventKey="Guia2" title="Guía de ejercicios 2">
        <h1>Hola página 2</h1>
      </Tab>
      <Tab eventKey="Guia3" title="Guía de ejercicios 3">
        <h1>Hola página 3</h1>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;
