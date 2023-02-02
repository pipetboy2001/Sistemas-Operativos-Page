import React from "react";
import { Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>Oops!</h1>
        </div>
        <h2>404 - Pagina no encontrada</h2>
        <p>Es posible que la página que está buscando haya sido eliminada debido a un cambio de nombre o no esté disponible temporalmente.</p>
        <Button href="/">
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
