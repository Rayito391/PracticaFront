import { Icon } from "@iconify/react";

import HelpNavBar from "../components/HelpNavBar";

import useDocumentTitle from "../hooks/useDocumentTitle";
import HelpCard from "../components/HelpCard";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

type ServiceType = {
  img: string;
  title: string;
};
const helpCardData = [
  {
    img: "https://centrodeayuda.coppel.com/file-asset/Mi_cuenta_icon?v=2",
    text: "Mi cuenta",
  },
  {
    img: "https://centrodeayuda.coppel.com/file-asset/Cart_icon?v=4",
    text: "Compras, pagos y facturación",
  },
  {
    img: "https://centrodeayuda.coppel.com/file-asset/Box_icon?v=2",
    text: "Mis pedidos",
  },
  {
    img: "https://centrodeayuda.coppel.com/file-asset/Truck_icon?v=2",
    text: "Envíos y entregas",
  },
  {
    img: "https://centrodeayuda.coppel.com/file-asset/Rotation_icon?v=2",
    text: "Cambios, devoluciones y garantías",
  },
];
const services: Array<ServiceType> = [
  {
    img: "https://centrodeayuda.coppel.com/file-asset/Card_icon?v=3",
    title: "Crédito Koppel",
  },
  {
    img: "https://centrodeayuda.coppel.com/file-asset/Key_Icon?v=3",
    title: "Servicios Koppel",
  },
  {
    img: "https://centrodeayuda.coppel.com/file-asset/Marketplace_Icon?v=3",
    title: "MarketPlace",
  },
  {
    img: "https://centrodeayuda.coppel.com/file-asset/Promo_Icon?v=3",
    title: "Sorteos y promociones",
  },
  {
    img: "https://centrodeayuda.coppel.com/file-asset/Lock_icon?v=4",
    title: "Seguridad y privacidad",
  },
];
const Ayuda: React.FC = () => {
  useDocumentTitle("Centro de ayuda");
  return (
    <div>
      <HelpNavBar />
      <div className="flex flex-col w-full h-auto">
        <div className="flex w-full h-14 items-center bg-custom-blue-ligth">
          <div className="ml-2 flex items-center">
            <Icon
              icon="ion:arrow-back-outline"
              className="w-3 h-3 text-white"
            />
            <Link to={"/"} className="text-white text-base font-light ml-1">
              Regresar a la página principal de Koppel
            </Link>
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
                className="py-3 pl-4 w-72 rounded-s-md"
              />
              <button className="relative bg-custom-yellow w-20 h-12 rounded-e-md float-end items-center ">
                <Icon icon="tabler:zoom" className="mx-auto my-auto w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white border pb-28">
        <div className="flex w-2/5 mt-36  pl-9 mx-auto h-auto space-x-6">
          {helpCardData.map((card, index) => (
            <HelpCard key={index} imageSource={card.img} textImg={card.text} />
          ))}
        </div>
        <div className="flex w-2/5 mt-28  mx-auto">
          <div className="w-full">
            <p className="text-center mb-10 text-2xl font-bold">
              Servicios y otros temas de ayuda
            </p>
            <div className="flex space-x-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="ml-12 hover:underline text-custom-blue-ligth cursor-pointer"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="mx-auto"
                  />
                  <p className="text-custom-blue-ligth text-xs text-center font-semibold w-24">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-3/5 mt-16 mx-auto  justify-center ">
          <div className=" ml-5">
            <p className="flex text-center mb-7 text-2xl font-bold">
              Lo mas buscado
            </p>
            <ul className="flex flex-col w-85 text-sm font-semibold underline text-custom-blue-ligth cursor-pointer">
              <li className="border-b-2 pt-5 pb-3 hover:text-custom-yellow hover:underline">
                ¿Cuáles son los medios de contacto oficiales de Coppel?
              </li>
              <li className="border-b-2 pt-5 pb-3 hover:text-custom-yellow hover:underline">
                ¿Cómo puedo hacer valida mi garantía de motos?
              </li>
              <li className="border-b-2 pt-5 pb-3 hover:text-custom-yellow hover:underline">
                ¿En cuanto tiempo llega mi pedido de Marketplace?
              </li>
              <li className="border-b-2 pt-5 pb-3 hover:text-custom-yellow hover:underline">
                ¿Cómo sé si un producto es de un vendedor externo o de Coppel?
              </li>
              <li className="border-b-2 pt-5 pb-3 hover:text-custom-yellow hover:underline">
                ¿Qué es Coppel Max?
              </li>
            </ul>
          </div>
          <div className="w-96 ml-5">
            <img
              className="w-full h-full"
              src="https://centrodeayuda.coppel.com/file-asset/Girl_in_jacket?v=1"
              alt="centroAyuda"
            />
          </div>
        </div>
      </div>
      <div className="-mt-14">
        <Footer />
      </div>
    </div>
  );
};
export default Ayuda;
