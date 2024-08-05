import { useState } from "react";
import { Icon } from '@iconify/react';
import arrowDownIcon from '@iconify/icons-ep/arrow-down';
import { scrollToTop } from "../utils/scrollUtils";

import TiendaComponent from '../components/Tienda'
import UbiFooter from "../components/UbiFooter";

import useDocumentTitle from "../hooks/useDocumentTitle";

const Tienda:React.FC = () => {
    useDocumentTitle('Encuentra tu tienda Koppel mas cercana');

    const [isOpenKoppel, setIsOpenKoppel] = useState<boolean>(true);
    const [isOpenEstados, setIsOpenEstados] = useState<boolean>(true);

    const toggleSectionKoppel = () => setIsOpenKoppel(prev => !prev);
    const toggleSectionEstados = () => setIsOpenEstados(prev => !prev);

    return (
    <>
        <div className="relative min-h-screen overflow-y-auto">
            <div>
                <TiendaComponent/>
            </div>
            <div className="mt-14">
                <div 
                    className="flex justify-between bg-white w-3/5 h-14 border rounded-lg shadow-lg mx-auto cursor-pointer"
                    onClick={toggleSectionKoppel}>
                    <p className="text-custom-blue font-bold text-lg ml-5 mt-3">
                        Ubica la tienda Koppel más cercana, y encuentra los servicios de BanKoppel y Afore Koppel
                    </p>
                    <button>
                        <Icon icon={arrowDownIcon} className={`w-5 h-5 mr-5 text-custom-blue transition-transform ${isOpenKoppel ? "rotate-180" : ""}`} />
                    </button>
                </div>
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpenKoppel ? "max-h-[1000px]" : "max-h-0"}`}>
                    <div className="bg-white w-3/5 h-auto border rounded-lg mx-auto shadow-lg text-gray-800">
                        <p className="mx-5 mt-5">
                        Koppel es una tienda que ofrece una gran variedad de categorías de productos y servicios atractivos y accesibles. Encontrarás marcas líderes que atienden las necesidades y los deseos de sus clientes.<br /><br />
                        En Koppel tenemos más de 20 mil productos a los que día a día se les van sumando nuevas alternativas. Es por eso que al ingresar vas a encontrar una gran variedad de opciones con el fin de que consigas eso que tanto estás buscando a precios inigualables. <br /> <br />
                        Durante todo el año nos encargamos de acercarte las mejores propuestas para que tu experiencia sea la mejor. Es por esto que, sin importar la época del año en que nos visites, siempre vas a encontrar grandes descuentos, promociones y meses sin intereses. Además, durante el año nos encargamos de lanzar y de unirnos a grandes eventos comerciales para brindar lo mejor de nosotros. <br /> <br />
                        Con tiendas a lo largo y ancho de toda la República Mexicana, siempre vas a encontrar una sucursal de Koppel cerca de ti para que te sea más fácil recibir todas las compras que hagas o incluso acercarte a nuestros mostradores si es que necesitas de nuestra ayuda. <br /> <br />
                        Todos los años de historia que tenemos en Koppel nos avalan, al igual que nuestros clientes que nos eligen una y otra vez porque saben que somos sinónimo de garantía y calidad. <br /> <br />
                        </p>
                    </div>
                </div>
            </div>  
            <div className="mt-9">
                <div 
                    className="flex justify-between bg-white w-3/5 h-14 border rounded-lg shadow-lg mx-auto cursor-pointer"
                    onClick={toggleSectionEstados}>
                    <p className="text-custom-blue font-bold text-lg ml-5 mt-3">
                        Navegar por estado
                    </p>
                    <button>
                        <Icon icon={arrowDownIcon} className={`w-5 h-5 mr-5 text-custom-blue transition-transform ${isOpenEstados ? "rotate-180" : ""}`} />
                    </button>
                </div>
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpenEstados ? "max-h-[1000px]" : "max-h-0"}`}>
                    <div className="flex justify-between bg-white w-3/5 h-auto border rounded-lg mx-auto shadow-lg text-customblue">
                        <div className="flex ml-5 mt-5 gap-28 underline text-custom-blue-ligth pb-5">
                            <div>
                                <ul className="space-y-2 cursor-pointer">
                                    <li>Aguascalientes</li>
                                    <li>Baja California</li>
                                    <li>Baja California Sur</li>
                                    <li>Campeche</li>
                                    <li>Chiapas</li>
                                    <li>Chihuahua</li>
                                    <li>Ciudad de México</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2 cursor-pointer">
                                    <li>Coahuila</li>
                                    <li>Colima</li>
                                    <li>Durango</li>
                                    <li>Estado de México</li>
                                    <li>Guanajuato</li>
                                    <li>Guerrero</li>
                                    <li>Hidalgo</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2 cursor-pointer">
                                    <li>Jalisco</li>
                                    <li>Michoacán</li>
                                    <li>Morelos</li>
                                    <li>Nayarit</li>
                                    <li>Nuevo León</li>
                                    <li>Oaxaca</li>
                                    <li>Puebla</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2 cursor-pointer">
                                    <li>Querétaro</li>
                                    <li>Quintana Roo</li>
                                    <li>San Luis Potosí</li>
                                    <li>Sinaloa</li>
                                    <li>Sonora</li>
                                    <li>Tabasco</li>
                                    <li>Tamaulipas</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2 cursor-pointer">
                                    <li>Tlaxcala</li>
                                    <li>Veracruz</li>
                                    <li>Yucatán</li>
                                    <li>Zacatecas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        <div className="flex w-full mt-14 bg-custom-dark-blue items-center">
            <button className="flex justify-center w-full font-bold py-4 text-white" onClick={scrollToTop}>
                Ir al inicio
                <Icon icon="oui:arrow-up" className="ml-1 mt-1 text-white w-4 h-4"/>
            </button>
        </div>
        <UbiFooter/>
    </>
  )
}

export default Tienda