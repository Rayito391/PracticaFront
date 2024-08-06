import React from "react";
import { Icon } from "@iconify/react";

// Define el tipo para las props
interface UbiCardProps {
  store: {
    name: string;
    type: string;
    address: string;
    hours: string;
  };
}

const UbiCard: React.FC<UbiCardProps> = ({ store }) => {
  return (
    <div className="flex justify-between h-56 border-b mt-2">
      <div className="flex flex-col w-2/3 m-4 border-r-gray-800">
        <div className="relative border-r w-full ">
          <span className="text-custom-blue-ligth underline text-xl">
            {store.name}
          </span>
          <br />
          <span className="text-gray-500 text-sm">{store.type}</span>
          <p className="text-lg font-base w-4/5 text-gray-800">
            {store.address}
          </p>
          <p className="flex items-center text-gray-800 -ml-2 text-lg">
            <Icon
              icon="tabler:point-filled"
              className="text-custom-green w-8 h-8 -mr-1"
            />
            <span className="font-bold">Abierto&nbsp;</span> Cierra a las{" "}
            <span className="">&nbsp;{store.hours}</span>
          </p>
        </div>
      </div>
      <div className="relative mr-5 mt-5 border-b-gray-800">
        <button className="flex flex-col items-center w-11 h-11 border border-custom-blue-ligth rounded-full mt-2">
          <Icon
            icon="mdi:telephone"
            className="text-custom-blue-ligth w-6 h-6 mt-2"
          />
        </button>
        <button className="flex items-center w-11 h-11 border border-custom-blue-ligth rounded-full mt-10 ">
          <Icon
            icon="clarity:map-solid-alerted"
            className="text-custom-blue-ligth w-6 h-6 ml-2"
          />
        </button>
      </div>
    </div>
  );
};

export default UbiCard;
