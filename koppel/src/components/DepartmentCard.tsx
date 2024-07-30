import React from 'react';
import { Icon } from '@iconify/react';

interface CardProps {
    name: string;
    icon: string;
    discount: string;
}

const DeparmentCard:React.FC<CardProps> = ({name,icon,discount}) =>{
    return(
        <div className="flex flex-col w-42 h-44 bg-white border rounded-2xl shadow-xl mb-6 cursor-pointer hover:border-custom-blue-ligth">
            <div className="mx-auto m-4">
                <div className="mb-1">
                    <Icon icon={icon} className="mx-auto w-12 h-12 text-custom-blue-ligth mb-4" />
                </div>
                <p className="text-center text-xs text-gray-900">
                    {name}
                </p>
                <div className="flex items-center mx-auto mt-7 w-18 h-6 rounded-xl bg-red-50">
                    <p className="mx-auto text-xs text-red-800">
                        Hasta {discount}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DeparmentCard