/* eslint-disable react/react-in-jsx-scope */
import { Icon } from '@iconify/react';
import {scrollToTop} from '../utils/scrollUtils'

const Footer:React.FC = () =>{
    return(
        <>
        <div className="flex w-full mt-14 bg-custom-dark-blue items-center">
            <button className="flex justify-center mt-1 w-full h-5 font-bold text-white" onClick={scrollToTop}>
                Ir arriba
                <Icon icon="oui:arrow-up" className="ml-1 mt-1 text-white w-4 h-4"/>
            </button>
        </div>
        <footer className="flex flex-col bg-custom-dark-blue bottom-0">
            <div className="flex justify-between w-full h-20 mx-auto mt-4 bg-custom-dark-blue-x2">
                <div className="flex items-center bg-custom-dark-blue-x2 ml-52">
                    <p className="font-base text-white text-xl">Compra Segura</p>
                    <figure className="w-20 h-8 bg-white ml-5 rounded-md">
                        <img className="w-4/5 ml-2 mt-1" src="https://ekata.com/wp-content/uploads/2023/08/accertify.svg" alt="Accertify" />
                    </figure>
                    <figure className="w-20 h-8 bg-white ml-2 rounded-md">
                        <img className="w-4/5 ml-2 mt-1"  src="https://compusoftme.com/wp-content/uploads/2023/01/230-2308139_if-you-purchase-a-globalsign-ssl-certificate-youll.png" alt="Secure" />
                    </figure>
                </div>
                <div className="flex items-center gap-1  mr-72">
                    <p className="font-base text-white text-xl">Descarga nuestra App Koppel</p>
                    <figure className="w-28 h-8 ml-5 bg-white overflow-hidden flex justify-center items-center rounded-lg">
                        <img className="w-96 h-8 object-cover" src="https://w7.pngwing.com/pngs/30/487/png-transparent-google-play-app-store-google-angle-text-logo.png" alt="Google Play" />
                    </figure>
                    <figure className="w-28 h-8 bg-white overflow-hidden flex justify-center items-center rounded-lg">
                        <img className="w-full h-full object-cover" src="https://w7.pngwing.com/pngs/323/118/png-transparent-available-on-the-app-store-hd-logo.png" alt="App Store" />
                    </figure>
                    <figure className="relative w-28 h-8 bg-white overflow-hidden flex justify-center items-center rounded-lg">
                        <img className="absolute w-40 object-fill" src="https://logowik.com/content/uploads/images/explore-it-on-huawei-appgallery1858.jpg" alt="Huawei AppGallery" />
                    </figure>
                </div>

            </div>
            <div className="flex w-4/5 h-full my-8 mx-auto space-x-20 bg-custom-dark-blue text-white ">
                <div className="w-52 h-auto ">
                    <p className="font-bold text-lg">
                        ACERCA DE KOPPEL
                    </p>
                    <ul className="text-base mt-8 space-y-3 ">
                        <li className="hover:underline">Acerca de nosotros</li>
                        <li className="hover:underline">Trabaja con nosotros</li>
                        <li className="hover:underline">Koppel Pay</li>
                        <li className="hover:underline">BanKoppel</li>
                        <li className="hover:underline">Afore Koppel</li>
                        <li className="hover:underline">Sala de prensa</li>
                        <li className="hover:underline">Fundación Koppel</li>
                    </ul>
                </div>
                <div className=" w-52 h-auto">
                    <p className="font-bold text-lg" >
                        ATENCIÓN A CLIENTES
                    </p>
                    <ul  className="text-base mt-8 space-y-3">
                        <li className="hover:underline">Koppel soluciones</li>
                        <li className="hover:underline">Cómo comprar</li>
                        <li className="hover:underline">Beneficios Koppel</li>
                        <li className="hover:underline">Métodos de pago</li>
                        <li className="hover:underline">Devoluciones y Garantías</li>
                        <li className="hover:underline">Centro de ayuda</li>
                        <li className="hover:underline">Quejas y Sugerencias</li>
                        <li className="hover:underline">Factura electrónica</li>
                    </ul>
                </div>
                <div className=" w-60 h-auto">
                    <p className="font-bold text-lg" >
                        PUBLICACIONES KOPPEL
                    </p>
                    <ul  className="text-base mt-8 space-y-3">
                        <li className="hover:underline">Blog Mejora Tu vida</li>
                        <li className="hover:underline">Cumplimiento Grupo Koppel</li>
                        <li className="hover:underline">Revista Koppel</li>
                        <li className="hover:underline">Periodicos y Revistas Koppel</li>
                        <li className="hover:underline">Fashion Market</li>
                        <li className="hover:underline">Mejora tus finanzas</li>
                        <li className="hover:underline">Notas de interés</li>
                    </ul>
                </div>
                <div className=" w-64 h-auto">
                    <p className="font-bold text-lg" >
                        DESTACADOS
                    </p>
                    <ul  className="text-base mt-8 space-y-3">
                        <li className="hover:underline">Hot Fashion 2024</li>
                        <li className="hover:underline">Hot Fashion Zapatos</li>
                        <li className="hover:underline">Hot Fashion Mujeres</li>
                        <li className="hover:underline">Hot Fashion Deportes</li>
                        <li className="hover:underline">Hot Fashion Hombres</li>
                        <li className="hover:underline">Hot Fashion Bebés</li>
                        <li className="hover:underline">Hot Fashion Niños y Adolescentes</li>
                        <li className="hover:underline">Hot Fashion Cuidado Personal</li>
                        <li className="hover:underline">Hot Fashion Maletas</li>
                        <li className="hover:underline">Hot Fashion Relojes</li>
                        <li className="hover:underline">Hot Fashion Tenis</li>
                    </ul>
                </div>
                <div className=" w-64 h-auto">
                    <p className="font-bold text-lg" >
                        REDES SOCIALES
                    </p>
                    <ul  className="text-base mt-8 space-y-3">
                        <li className="flex hover:underline">
                            <Icon icon="ic:baseline-facebook" className="h-7 w-7 mr-2" />
                            Facebook
                        </li>
                        <li className="flex hover:underline">
                            <Icon icon="bi:instagram" className="h-7 w-7 mr-2"/>
                            Instragram
                        </li>
                        <li className="flex hover:underline">
                            <Icon icon="simple-icons:youtube" className="h-7 w-7 mr-2"/>
                            Youtube
                        </li>
                        <li className="flex hover:underline">
                            <Icon icon="ic:round-tiktok"className="h-7 w-7 mr-2" />
                            TikTok
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center w-full h-20 mx-auto bg-custom-dark-blue-x2">
                <div className='mx-auto'>
                    <ul className="flex text-base text-white gap-24 ml-10">
                        <li>Aviso de privacidad</li>
                        <li>Términos y condiciones</li>
                        <li>Aviso de no discriminación</li>
                        <li>Seguridad en Koppel.com</li>
                        <li>Mapa del sitio</li>
                        <li className="flex"><Icon icon="openmoji:flag-argentina" className="w-6 h-auto mr-2"/>Coppel Argentina</li>
                    </ul>
                </div>
            </div>
            <div className='bg-custom-dark-blue-x2'>
                <div className="w-4/5 mx-auto text-xs text-center text-white mt-1">
                    <p>
                    *Te llamaremos si es necesario para darle seguimiento a tu compra. <br />
                    Todos los precios en Coppel.com son en pesos mexicanos e incluyen impuestos. Los precios y promociones de nuestro sitio web son exclusivos de Coppel.com. Los abonos quincenales, el plazo o el pago inicial pueden variar según el margen de crédito y el historial de pago de cada cliente. Los quincenales contemplan: 24, 36, 48, 60 o 72 quincenas para muebles y 24 quincenas para ropa. Los productos de Marketplace que lleves con tu crédito Coppel, cuentan con un plazo de 24 quincenas y son financiados con Coppel Pay.
                    </p>
                </div>
                <div className="text-center text-white text-xs w-1/5 h-full mx-auto mt-5 pb-12">
                2024 &copy; Koppel todos los derechos reservados
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;