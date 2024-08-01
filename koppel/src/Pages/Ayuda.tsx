import { Icon } from '@iconify/react';

//components
import HelpNavBar from '../components/HelpNavBar'

//hooks
import useDocumentTitle from '../hooks/useDocumentTitle';
import HelpCard from '../components/HelpCard';
import { Link } from 'react-router-dom';
const HelpCardData = [
    {img:"https://centrodeayuda.coppel.com/file-asset/Mi_cuenta_icon?v=2",text:"Mi cuenta"},
    {img:"https://centrodeayuda.coppel.com/file-asset/Cart_icon?v=4",text:"Compras, pagos y facturación"},
    {img:"https://centrodeayuda.coppel.com/file-asset/Box_icon?v=2",text:"Mis pedidos"},
    {img:"https://centrodeayuda.coppel.com/file-asset/Truck_icon?v=2",text:"Envíos y entregas"},
    {img:"https://centrodeayuda.coppel.com/file-asset/Rotation_icon?v=2",text:"Cambios, devoluciones y garantías"},
]
const Services = [
    {img:"https://centrodeayuda.coppel.com/file-asset/Card_icon?v=3",title:"Crédito Koppel"},
    {img:"https://centrodeayuda.coppel.com/file-asset/Key_Icon?v=3",title:"Servicios Koppel"},
    {img:"https://centrodeayuda.coppel.com/file-asset/Marketplace_Icon?v=3",title:"MarketPlace"},
    {img:"https://centrodeayuda.coppel.com/file-asset/Promo_Icon?v=3",title:"Sorteos y promociones"},
    {img:"https://centrodeayuda.coppel.com/file-asset/Lock_icon?v=4",title:"Seguridad y privacidad"},
]
function Ayuda (){
    useDocumentTitle('Centro de ayuda')
    return(
        <>
        <div>
            <HelpNavBar/>
            <div className="flex flex-col w-full h-auto">
                <div className="flex w-full h-14 items-center bg-custom-blue-ligth">
                    <div className="ml-2 flex items-center">
                        <Icon icon="ion:arrow-back-outline" className="w-3 h-3 text-white" />
                        <Link to={"/"}  className="text-white text-base font-light ml-1">Regresar a la página principal de Koppel</Link>
                    </div>
                </div>
                <div className=" flex w-full h-auto pt-3 pb-9 bg-custom-blue-ligth">
                    <div className="flex flex-col w-auto text-center mx-auto">
                        <p className="text-white font-semibold text-3xl mb-5">
                            Centro de ayuda
                        </p>
                        <p className="text-white font-bold text-4xl mb-10">
                            ¿Cómo podemos ayudarte?
                        </p>
                        <div className="flex justify-center items-center">
                            <input 
                                type="text" 
                                placeholder="Escribenos una pregunta" 
                                className="py-3 pl-4 w-72 rounded-s-md"/>
                            <button className="relative bg-custom-yellow w-20 h-12 rounded-e-md float-end items-center ">
                                <Icon icon="tabler:zoom" className="mx-auto my-auto w-5 h-5"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full bg-white border border-red-500 pb-28">
                <div className="flex w-2/5 mt-36  pl-9 mx-auto h-auto space-x-6">
                    {HelpCardData.map((card,index) => (
                        <HelpCard key={index} img={card.img} text={card.text}/>
                    ))}
                </div>
                <div className="flex w-2/5 mt-28  mx-auto">
                    <div className="w-full">
                        <p className="text-center mb-10 text-2xl font-bold">
                            Servicios y otros temas de ayuda
                        </p>
                        <div className="flex space-x-12">
                            {Services.map((service,index) => (
                                <div key={index} className="ml-12">
                                    <img src={service.img} alt={service.title} className="mx-auto" />
                                    <p className="text-custom-blue-ligth text-xs text-center font-semibold w-24">{service.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
export default Ayuda;