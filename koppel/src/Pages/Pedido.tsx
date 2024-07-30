import { useEffect } from "react";
import { Icon } from '@iconify/react';
import OrderForm from '../components/OrderForm';
import Footer from '../components/Footer';
function Pedido() {
    useEffect(() => {
        document.title = 'Sigue tus pedidos en linea al instante'
    },[]);
    return(
        <>
            <div className="flex flex-col mx-auto">
                <div className="w-full h-120 bg-custom-blue-ligth">
                    <div className="mt-16">
                        <div className="mx-auto w-28 h-28 rounded-full bg-white"></div>
                        <Icon icon="hugeicons:truck-delivery" className="mx-auto -mt-24 text-custom-blue-ligth w-20 h-20"/>
                    </div>
                    <div className="mt-2 py-5">
                        <p className="text-center font-bold text-4xl text-white">
                            Sigue tus pedidos en Koppel
                        </p>
                        <p className="mt-2 text-center font-base text-2xl mb-1 text-white">
                            Ve el estado de los pedidos que hagas en internet y en tienda
                        </p>
                    </div>
                    <figure className="mx-auto w-7 h-7 -mt-5 rotate-45 z-0 bg-custom-blue-ligth"></figure>
                    <div className="mx-auto">
                        <OrderForm/>
                    </div>
                </div>
                <div className="relative mt-14 w-144 h-16 mx-auto bg-white rounded-lg shadow-xl">
                    <div className="flex mt-4">
                        <ul className="flex space-x-8">
                            <li className='flex ml-10'>
                                <Icon icon="streamline:padlock-square-1-solid" className="text-custom-blue-ligth w-6 h-6" />
                            </li>
                            <li className="flex">
                                <p>Tus datos están 100% seguros y encriptados</p>
                            </li>
                            <li className="flex">
                                <img src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/footer/Secure.svg" alt="" />
                            </li>
                        </ul>
                    </div>                                        
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Pedido;