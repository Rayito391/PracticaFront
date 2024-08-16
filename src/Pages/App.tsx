import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavBar from "../components/NavBar";
import OfferBanner from "../components/OfferBanner";
import Tienda from "./Tienda";
import Home from "./Home";
import Pedido from "./Pedido";
import Ayuda from "./Ayuda";
import Survey from "../components/Survey";

const App: React.FC = () => {
  const location = useLocation();
  const hideNavBarRoutes = ["/ayuda"];
  const showNavBar = !hideNavBarRoutes.includes(location.pathname);
  const [showOfferBanner, setShowOfferBanner] = React.useState(
    location.pathname === "/"
  );

  React.useEffect(() => {
    setShowOfferBanner(location.pathname === "/");
  }, [location]);
  return (
    <>
      {showOfferBanner && <OfferBanner />}
      {showNavBar && <NavBar />}
      <Survey />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/pedidos" element={<Pedido />} />
        <Route path="/ayuda" element={<Ayuda />} />
      </Routes>
    </>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
