import React from "react";
import { Icon } from '@iconify/react';

const Tienda: React.FC = () => {
    return(
        <div className="flex-col mt-4 mx-auto w-3/5 border">
            <p className="text-custom-blue cursor-pointer text-sm hover:text-custom-blue-ligth underline">Ubica tu tienda
            </p>
            <p className="mt-3 font-bold text-2xl text-gray-700">
                Tienda Koppel cerca de ti (<span>10</span>)
            </p>
            <div className="flex relative mt-3 gap-2">
                <button className="flex items-center font-normal border text-sm text-gray-500 rounded-full w-auto h-7 py-0.5 px-2 space-x-1">
                    <span>
                        <Icon icon="ic:outline-check" className="w-4 h-4 text-custom-blue-ligth"/>
                    </span>
                    <p>Motos</p>
                </button>
                <button className="flex items-center font-normal border text-sm text-gray-500 rounded-full w-auto h-7 py-0.5 px-3 space-x-2">
                    <span>
                        <Icon icon="ic:outline-check" className="w-4 h-4 text-custom-blue-ligth"/>
                    </span>
                    <p>Bodega</p>
                </button>
                <button className="flex items-center font-normal border text-sm text-gray-500 rounded-full w-auto h-7 py-0.5 px-3 space-x-2">
                    <span>
                        <Icon icon="ic:outline-check" className="w-4 h-4 text-custom-blue-ligth"/>
                    </span>
                    <p>Fashion Market</p>
                </button>
                <button className="flex items-center font-normal border text-sm text-gray-500 rounded-full w-auto h-7 py-0.5 px-3 space-x-2">
                    <span>
                        <Icon icon="ic:outline-check" className="w-4 h-4 text-custom-blue-ligth"/>
                    </span>
                    <p>Cajero</p>
                </button>
                <button className="flex items-center font-normal border text-sm text-gray-500 rounded-full w-auto h-7 py-0.5 px-3 space-x-2">
                    <span>
                        <Icon icon="ic:outline-check" className="w-4 h-4 text-custom-blue-ligth"/>
                    </span>
                    <p>Tiendas Koppel</p>
                </button>
                <button className="flex items-center font-normal border text-sm text-gray-500 rounded-full w-auto h-7 py-0.5 px-3 space-x-2">
                    <span>
                        <Icon icon="ic:outline-check" className="w-4 h-4 text-custom-blue-ligth"/>
                    </span>
                    <p>BanKoppel</p>
                </button>
                <button className="flex items-center font-normal border text-sm text-gray-500 rounded-full w-auto h-7 py-0.5 px-3 space-x-2">
                    <span>
                        <Icon icon="ic:outline-check" className="w-4 h-4 text-custom-blue-ligth"/>
                    </span>
                    <p>Afore Koppel</p>
                </button>
                <button className="flex items-center font-normal border text-sm text-gray-500 rounded-full w-auto h-7 py-0.5 px-3 space-x-2">
                    <span>
                        <Icon icon="ic:outline-check" className="w-4 h-4 text-custom-blue-ligth"/>
                    </span>
                    <p>Koppel Canada</p>
                </button>
            </div>
            <div className="flex flex-col shadow-lg rounded-sm">
                <div className="relative border bg-white mt-6 w-1/3 h-96">
                    <input 
                        type="search"
                        placeholder="Ingrese la ciudad o codigo postal"
                        className="w-85 mx-3 mt-7 bg-custom-base bg-opacity-50 py-3 px-3 font-semibold  text-opacity-90"/>
                        <Icon icon="carbon:search" className="absolute top-0 text-custom-blue-ligth w-6 h-6"/>
                    <div className="w-85 mx-3 border-b-2 border-gray-400"></div>
                </div>

            </div>
        </div>
    )
}

export default Tienda;