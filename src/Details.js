import { useParams } from "react-router-dom";

const Details = () => {

    const parametros = useParams();

    const name = parametros.name;
  
    return (
      <div>
        <h1>Seja bem vindo, {name}!</h1>
      </div>
    )
  }
  
  export default Details;