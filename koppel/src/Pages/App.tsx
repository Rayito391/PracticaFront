import React from "react"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

//components
import NavBar from "../components/NavBar";
import Tienda from "./Tienda";
import Home from "./Home";
import Pedido from "./Pedido";

const Ayuda: React.FC = () => <div>Ayuda</div>;

function App() {
    return (
    <>
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/pedidos" element={<Pedido />} />
            <Route path="/ayuda" element={<Ayuda />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
