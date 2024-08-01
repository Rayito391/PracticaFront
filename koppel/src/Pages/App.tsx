// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import NavBarWrapper from "../components/NavBarWrapper"; // Asegúrate de ajustar la ruta según tu estructura
import Tienda from "./Tienda";
import Home from "./Home";
import Pedido from "./Pedido";
import Ayuda from "./Ayuda";

function App() {
    return (
        <Router>
            <NavBarWrapper />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/pedidos" element={<Pedido />} />
                <Route path="/ayuda" element={<Ayuda />} />
            </Routes>
        </Router>
    );
}

export default App;
