import React from "react";
import { useParams } from "react-router-dom";
import imagenes from "../Json/Tema.json";
import "bootstrap/dist/css/bootstrap.min.css";

function TemaPage() {
    const { temaId } = useParams();
    // Filtrar las imágenes por temaId
    const imagenesFiltradas = imagenes.filter((imagen) => imagen.temaId === temaId);


    return (
        <div className="container">
            <h1>{temaId}: </h1>

            {imagenesFiltradas.map((imagen, index) => (
                <div className="row" key={index}>
                    <div className="col-md-8">
                        <img
                            className="d-block w-100"
                            src={imagen.imagen}
                            alt={imagen.nombre}
                        />
                    </div>
                    <div className="col-md-4">
                        <h3>{imagen.nombre}</h3>
                        <p>{imagen.descripcion}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TemaPage;
