import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h4>Hecho con ❤ por Pipetboy</h4>
            <p>
              Este sitio web es un proyecto personal que ofrece recursos y soluciones para el curso de Sistemas Operativos.
            </p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h4>Redes sociales</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/pipetboy2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaGithub className="me-2" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h4>Enlaces de interés</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.usach.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <AiFillHome className="me-2" />
                  Universidad de Santiago de Chile
                </a>
              </li>
              <li>
                <a
                  href="https://pages.cs.wisc.edu/~remzi/OSTEP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <BsBook className="me-2" />
                  LIBRO - Operating System Three Easy Pieces
                </a>
              </li>
              <li>
                <a
                  href="../assets/Books/Operating-System-Concepts-10th-Edition.pdf"
                  target="_blank"
                  download
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <BsBook className="me-2" />
                  LIBRO - Operating System Concepts
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
