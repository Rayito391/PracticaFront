// NavBarWrapper.tsx
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

const NavBarWrapper: React.FC = () => {
    const location = useLocation();
    const hideNavBarRoutes = ['/ayuda']; // Rutas donde no quieres mostrar el NavBar

    // Determina si se debe mostrar el NavBar
    const showNavBar = !hideNavBarRoutes.includes(location.pathname);

    return (
        <NavBar showNavBar={showNavBar} />
    );
};

export default NavBarWrapper;
