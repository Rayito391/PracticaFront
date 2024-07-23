import React from "react"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import NavBar from "../../components/navBar";

const Tienda: React.FC = () => <div>Ubica tu tienda</div>;
const Pedido: React.FC = () => <div>Sigue tus pedidos</div>;
const Ayuda: React.FC = () => <div>Ayuda</div>;

function App() {
    return (
    <>
      <div>
        <Router>
          <NavBar/>
          <Routes>
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
