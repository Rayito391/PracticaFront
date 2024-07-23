import React from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import arrowDownIcon from '@iconify/icons-ep/arrow-down'; // Importa el ícono de Arrow Down
import Logo from '../../assets/images/logo.png'

// Define the NavItem type
interface NavItem {
    label: string;
    path: string;
}

// Define the nav items
const navItems: NavItem[] = [
    {label:'Ubica tu tienda', path:'/tienda'},
    {label:'Sigue tus pedidos', path:'/pedidos'},
    {label:'Ayuda', path:'/ayuda'},
]

const NavBar: React.FC = () => {
    return(
        <div>
            <header className="flex justify-between h-18 items-center bg-custom-yellow">
                <div className="flex items-center">
                    <div className="ml-8 w-40 h-16">
                        <figure className="items-center">
                            <img
                                className="w-40 mt-1 cursor-pointer"
                                src={Logo} 
                                title="Ir a la pagina principal de coppel.com"
                            />
                        </figure>
                    </div>
                    <div className="relative flex ml-7 w-125 overflow-hidden">
                        <input
                            className="rounded-lg w-full h-8 pl-3 pr-16 text-sm"
                            type="search"
                            placeholder="Busca tus productos"
                        />
                        <button 
                            type="button" 
                            className="absolute right-10 top-1"
                            title="Realiza tus busquedas por voz">
                            <Icon icon="ph:microphone-light" className="text-black w-6 h-6" />
                        </button>
                        <button 
                            type="button" 
                            className="absolute right-0 bg-custom-blue-ligth w-9 h-8 rounded-tr-lg rounded-br-lg border-t-0 border-l-0"
                            title="Search">
                            <Icon icon="carbon:search" className="ml-2 text-white w-6 h-6"/>
                        </button>
                    </div>
                </div>
                <div className="flex relative items-center">
                    <div className="pr-16 border-r border-black cursor-pointer">
                        <figure className="absolute -left-7 top-5 cursor-pointer">
                            <Icon icon="mdi:telephone" className="text-black w-6 h-6" />
                        </figure>
                        <p className="text-sm font-bold">Comprar ahora</p>
                        <p className="text-sm underline">800 220 7735</p>
                    </div>
                    <div className="relative w-40 ml-12 mr-8 cursor-pointer">
                        <figure className="absolute -left-5 top-1">
                            <Icon icon="ooui:map-pin" className="cursor-pointer text-custom-blue-ligth w-4 h-5" />
                        </figure>
                        <p className="text-sm font-bold">
                            Ciudad de entrega:
                        </p>
                        <p className="flex font-light">
                            CULIACAN
                            <Icon icon={arrowDownIcon} className="absolute right-0 ml-2 w-6 h-6 text-custom-blue" />
                        </p>
                    </div>
                    <div className="bg-custom-yellow-ligth w-44 h-18 justify-center p-3 px-5">
                        <p className="text-sm">Hola,</p>
                        <p className="relative flex text-sm font-bold cursor-pointer">
                            Iniciar sesion
                            <Icon icon={arrowDownIcon} className="absolute right-0 ml-2 w-6 h-6 text-custom-blue" />
                        </p>
                    </div>
                    <div className="cursor-pointer">
                        <figure className="bg-custom-blue-ligth w-20 h-18 p-3">
                            <Icon icon="prime:shopping-cart" className="text-white w-12 h-12" />
                        </figure>
                    </div>
                </div>
            </header>
            <nav className="flex justify-between bg-white w-full top-0 py-4 cursor-pointer">
                <ul className="flex ml-6">
                    <li className="flex items-end text-base mx-2 font-bold">
                        Departamentos
                        <Icon icon={arrowDownIcon} className=" ml-2 w-6 h-6 text-custom-blue" />
                    </li>
                    <li className=" flex items-end font-bold text-base mx-2 text-custom-red">
                        <svg className="mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><g fill="#d3273e"><path fill-rule="evenodd" d="M4.91 4.564c-.018.283-.034.596-.047.927c-.054 1.358-.047 2.907.102 4.078l7.265 7.265l4.95-4.95l-7.265-7.265c-1.17-.149-2.72-.156-4.078-.102c-.331.013-.643.03-.927.047M3.094 2.748c-.097.092-.49 4.567-.077 7.33c.044.294.189.56.399.77l7.753 7.754a1.5 1.5 0 0 0 2.122 0l5.657-5.657a1.5 1.5 0 0 0 0-2.122L11.194 3.07a1.382 1.382 0 0 0-.77-.4c-2.763-.411-7.238-.02-7.33.078" clip-rule="evenodd"/><path d="M9.142 7.466A1 1 0 1 1 7.727 8.88a1 1 0 0 1 1.415-1.414"/></g></svg>
                        Ofertas
                        <Icon icon={arrowDownIcon} className="ml-2 w-6 h-6 mt-1"/>
                        </li>
                    <li className=" flex items-end text-base mx-2">
                        Servicios
                        <Icon icon={arrowDownIcon} className=" ml-2 w-6 h-6 text-custom-blue" />
                        </li>
                </ul>
                <ul className="flex mr-8">
                    {navItems.map((item) => (
                        <li key={item.path} className="font-normal text-base mx-2">
                            <Link to={item.path}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
        
    )
}

export default NavBar