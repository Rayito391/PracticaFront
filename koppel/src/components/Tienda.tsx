import React, { useState } from "react";
import { Icon } from '@iconify/react';

// Components
import UbiCard from './UbiCard';
import MapComponent from './MapComponent';

// Define el tipo para el store
interface Store {
    name: string;
    type: string;
    address: string;
    hours: string;
}

interface Button {
    id: number;
    label: string;
}

const buttons: Button[] = [
    { id: 1, label: 'Motos' },
    { id: 2, label: 'Bodega' },
    { id: 3, label: 'Fashion Market' },
    { id: 4, label: 'Cajero' },
    { id: 5, label: 'Tiendas Koppel' },
    { id: 6, label: 'BanKoppel' },
    { id: 7, label: 'Afore Koppel' },
    { id: 8, label: 'Koppel Canada' },
];

const Tienda: React.FC = () => {
    const [selectedButtons, setSelectedButtons] = useState<number[]>([]);
    const [stores, setStores] = useState<Store[]>([]);
    const [isSearchingByName, setIsSearchingByName] = useState<boolean>(false);

    const handleButtonClick = (id: number) => {
        if (selectedButtons.includes(id)) {
            setSelectedButtons(selectedButtons.filter((buttonId) => buttonId !== id));
        } else {
            setSelectedButtons([...selectedButtons, id]);
        }
    };

    const handleStoresLoaded = (loadedStores: Store[]) => {
        setStores(loadedStores);
    };
    const toggleSearchMode = () => {setIsSearchingByName(!isSearchingByName);
    };

    return (
        <div className="flex-col mt-4 mx-auto w-3/5">
            <p className="text-custom-blue cursor-pointer text-sm hover:text-custom-blue-ligth underline">Ubica tu tienda</p>
            <p className="mt-3 font-bold text-2xl text-gray-700">
                Tienda Koppel cerca de ti (<span>{stores.length}</span>)
            </p>
            <div className="flex relative mt-3 gap-2 h-full">
                {buttons.map((button) => (

                    <button
                        key={button.id}
                        onClick={() => handleButtonClick(button.id)}
                        className={`bg-custom-blue-ligth bg-opacity-5 flex items-center font-normal border border-gray-300 text-sm rounded-full w-auto h-7 py-0.5 px-3 space-x-2`}
                    >
                        <span>
                            <Icon
                                icon="ic:outline-check"
                                className={`w-4 h-4 ${
                                    selectedButtons.includes(button.id) ? 'text-custom-blue-ligth text-opacity-5' : 'text-custom-blue-ligth'
                                }`}
                            />
                        </span>
                        <p>{button.label}</p>
                    </button>
                ))}
            </div>
            <div className="flex justify-between rounded-lg h-160">
                {/* Left section */}
                <div className="flex flex-col w-1/3 h-full">
                    <div className="relative bg-white mt-6 h-28 rounded-ss-lg">
                        <input 
                            type="search"
                            placeholder={isSearchingByName ? "Ingrese nombre de tienda" : "Ingrese la ciudad o código postal"}
                            className="w-85 mx-4 mt-4 bg-custom-base bg-opacity-50 py-3 px-3 font-semibold text-opacity-90"
                        />
                        <div className="cursor-pointer absolute flex w-20 top-7 right-3 gap-4">
                            <Icon icon="carbon:search" className="text-custom-blue-ligth w-6 h-6" />
                            <Icon icon="ph:microphone-bold" className="text-custom-blue-ligth w-6 h-6" />
                        </div>
                        <div className="w-85 mx-4 border-b-2 border-gray-400"></div>
                        <p onClick={toggleSearchMode} className="float-end mr-4 my-2 text-custom-blue-ligth cursor-pointer text-sm hover:text-opacity-80 underline">
                            {isSearchingByName ? "Buscar por ciudad o código postal" : "Buscar por nombre de la tienda"}
                        </p>
                    </div>
                    <div className="bg-white flex flex-col h-full rounded-b-lg overflow-hidden overflow-y-scroll">
                        {stores.map((store, index) => (
                            <UbiCard key={index} store={store} />
                        ))}
                    </div>
                </div>
                {/* Right section */}
                <div className="w-2/3 h-full">
                    <MapComponent onStoresLoaded={handleStoresLoaded} />
                </div>
            </div>
        </div>
    );
};

export default Tienda;
