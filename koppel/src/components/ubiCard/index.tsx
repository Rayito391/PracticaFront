import React  from "react";
import { Icon } from '@iconify/react';


const UbiCard: React.FC = () =>{
    return(
        <div className="flex justify-between h-56 border-b mt-2">
            <div className="flex flex-col m-4">
                <div className="relative border-r">
                    <span className="text-custom-blue-ligth underline text-xl">
                        Coppel Canada La Primavera
                    </span>
                    <br />
                    <span className="text-gray-500 text-sm">
                        Cajero/ Tiendas Koppel
                    </span>
                    <p className="text-lg font-base w-4/5 text-gray-800">
                        <span>1.4km </span>Av. Kiki Murillo #103 Interior 21 Poniente Entre Isla del Oeste y Vía Maquio
                        Culiacán, MX-SIN 80199
                    </p>
                    <p className="flex items-center text-gray-800 -ml-2 text-lg">
                        <Icon icon="tabler:point-filled" className="text-custom-green w-8 h-8 -mr-1"  />
                        <span className="font-bold">Abierto&nbsp;</span>  Cierra a las <span className="">&nbsp;8:30pm</span>
                    </p>
                </div>    
            </div>
            <div className="relative w-3/5">
                <button className="flex flex-col items-center w-11 h-11 border border-custom-blue-ligth rounded-full mt-12 ml-3">
                    <Icon icon="mdi:telephone" className="text-custom-blue-ligth w-6 h-6 mt-2" />
                </button>
                <button  className="flex items-center w-11 h-11 border border-custom-blue-ligth rounded-full mt-12 ml-3">
                    <Icon icon="clarity:map-solid-alerted" className="text-custom-blue-ligth w-6 h-6 ml-2" />
                </button>
            </div>
        </div>
    )
}

export default UbiCard;