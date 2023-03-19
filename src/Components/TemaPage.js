import { useParams } from "react-router-dom";

function TemaPage() {
    let { temaId } = useParams();

    return <h1>Hola mundo, este es el tema {temaId}</h1>;
}

export default TemaPage;
