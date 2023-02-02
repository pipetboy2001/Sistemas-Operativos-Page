import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-light py-5">
      <div className="container">
        <p className="text-center mb-4">Hecho con amor por Pipetboy</p>
        <div className="d-flex justify-content-center">
          <a
            href="https://github.com/pipetboy2001"
            target="_blank"
            className="btn btn-secondary mx-3"
          >
            Ver perfil en GitHub
          </a>
          <a
            href="https://www.usach.cl/"
            target="_blank"
            className="btn btn-secondary mx-3"
          >
            Visitar Universidad de Santiago de Chile
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
