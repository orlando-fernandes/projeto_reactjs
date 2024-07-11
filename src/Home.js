import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const [name, setName] = useState('');
  
    return (
      <div>
        <h1>Página Home - {name}</h1>

        <input placeholder="Digite seu nome" onChange={(txt) => setName(txt.target.value)} />

        <Link to={`/details/${name}`}>Acessar Details</Link>
      </div>
    )
  }
  
  export default Home;