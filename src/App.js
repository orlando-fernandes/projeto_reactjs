import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Home';
import Details from './Details';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={ <h1> RAIZ DO PROJETO</h1> } />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;