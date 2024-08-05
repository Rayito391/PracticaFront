import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import arrowLeftIcon from "@iconify/icons-ep/arrow-left";
import arrowRightIcon from "@iconify/icons-ep/arrow-right";
import arrowDownIcon from "@iconify/icons-ep/arrow-down";
import arrowUpIcon from "@iconify/icons-ep/arrow-up";

import Carrousel from "../components/PhotoCarrousel";
import DepartmentCard from "../components/DepartmentCard";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import MarkBar from "../components/MarkBar";
import BenefitBar from "../components/BenefitBar";

import useDocumentTitle from "../hooks/useDocumentTitle";
import useProducts from "../hooks/useProducts";

const images = [
  "https://cdn2.coppel.com/images/emarketing/sliders/2024/s31/desktop/s31_slider1_desktop_motos_2.jpg?iresize=width:900,height:450",
  "https://cdn2.coppel.com/images/emarketing/sliders/2024/s31/desktop/s31_slider2_desktop_sandalias.jpg?iresize=width:900,height:450",
  "https://cdn2.coppel.com/images/emarketing/sliders/2024/s31/desktop/s31_slider4_desktop_Colchones_A.jpg?iresize=width:900,height:450",
  "https://cdn2.coppel.com/images/emarketing/sliders/2024/s31/desktop/s31_slider3_desktop_hombre.jpg?iresize=width:900,height:450",
  "https://cdn2.coppel.com/images/emarketing/sliders/2024/s31/desktop/s31_slider5_desktop_mochilas.jpg?iresize=width:900,height:450",
  "https://cdn2.coppel.com/images/emarketing/sliders/2024/s31/desktop/s31_slider6_desktop_HP.jpg?iresize=width:900,height:450",
];

interface Department {
  name: string;
  icon: string;
  discount: string;
}

const departments: Department[] = [
  { name: "Hogar y Muebles", icon: "ri:armchair-line", discount: "40%" },
  {
    name: "Línea Blanca",
    icon: "icon-park-outline:washing-machine-one",
    discount: "45%",
  },
  { name: "Zapatos", icon: "hugeicons:running-shoes", discount: "50%" },
  { name: "Electrónica", icon: "cil:tv", discount: "55%" },
  { name: "Celulares", icon: "mdi:cellphone", discount: "35%" },
  { name: "Mujeres", icon: "ion:woman-outline", discount: "40%" },
  { name: "Hombres", icon: "ion:man-outline", discount: "40%" },
  { name: "Motos y Movilidad", icon: "mdi:racing-helmet", discount: "15%" },
  {
    name: "Deportes",
    icon: "material-symbols-light:sports-baseball-outline",
    discount: "50%",
  },
  { name: "Electrodomésticos", icon: "hugeicons:blender", discount: "46%" },
  {
    name: "Consolas y Videojuegos",
    icon: "solar:gamepad-linear",
    discount: "20%",
  },
  { name: "Cuidado Personal", icon: "solar:perfume-linear", discount: "40%" },
  { name: "Juguetes", icon: "mingcute:toy-horse-line", discount: "50%" },
  {
    name: "Niños y Adolescentes",
    icon: "healthicons:young-people",
    discount: "50%",
  },
  { name: "Relojes, Lentes y Joyería", icon: "mynaui:watch", discount: "40%" },
  { name: "Bebés", icon: "ic:outline-stroller", discount: "30%" },
  { name: "Ferretería", icon: "ion:hammer-outline", discount: "30%" },
  { name: "Automotriz", icon: "mdi:car-sports", discount: "60%" },
  {
    name: "Maletas, Bolsos y Mochilas",
    icon: "fa6-solid:suitcase-rolling",
    discount: "65%",
  },
  { name: "Mascotas", icon: "icons8:cat-footprint", discount: "60%" },
  {
    name: "Salud y Bienestar",
    icon: "solar:hand-heart-outline",
    discount: "30%",
  },
  { name: "Instrumentos Musicales", icon: "ph:guitar-light", discount: "35%" },
];

const ITEMS_PER_PAGE = 6;

const Home: React.FC = () => {
  useDocumentTitle("Koppel.com - Koppel mejora tu vida");

  const [expanded, setExpanded] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showPrevious, setShowPrevious] = useState<boolean>(false);
  const [showNext, setShowNext] = useState<boolean>(true);

  const { products } = useProducts();
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setShowPrevious(currentIndex > 0);
    setShowNext(currentIndex + 1 < totalPages);
  }, [currentIndex, totalPages]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const displayedProducts = products.slice(
    currentIndex * ITEMS_PER_PAGE,
    (currentIndex + 1) * ITEMS_PER_PAGE
  );

  return (
    <>
      <div className="flex mx-auto w-4/5 h-150 mt-6">
        <div className="ml-7 w-250 h-150 rounded-xl object-cover overflow-hidden cursor-pointer">
          <Carrousel images={images} />
        </div>
        <div className="flex flex-col w-85 mx-auto mb-16">
          <div className="flex items-center overflow-hidden w-auto h-2/4 cursor-pointer">
            <img
              className="rounded-xl mb-5"
              src="https://cdn2.coppel.com/images/emarketing/homepage/2024/s31/desktop/D1.jpg?i10c=img.resize(width:350)?iresize=width:535,height:400"
              alt="homepage image"
            />
          </div>
          <div className="flex items-center overflow-hidden w-auto h-1/2 pb-2 cursor-pointer">
            <img
              className="rounded-xl"
              src="https://cdn2.coppel.com/images/emarketing/homepage/2024/s31/desktop/D2.jpg?i10c=img.resize(width:350)?iresize=width:535,height:400"
              alt="homepage image2"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto w-4/5 h-auto -mt-4">
        <div className="ml-5">
          <p className="font-semibold text-3xl mb-3">Todos los departamentos</p>
          <div
            className={`grid ${expanded ? "grid-cols-8" : "grid-cols-8"} gap-4 transition-all duration-700 ease-in-out`}
          >
            {departments
              .slice(0, expanded ? departments.length : 7)
              .map((department, index) => (
                <DepartmentCard
                  key={index}
                  name={department.name}
                  icon={department.icon}
                  discount={department.discount}
                />
              ))}
            <button
              onClick={handleToggle}
              className="flex flex-col items-center justify-center bg-custom-blue-ligth w-42 h-44 text-white rounded-lg"
            >
              <Icon
                icon={expanded ? arrowUpIcon : arrowDownIcon}
                className="w-14 h-14 text-white"
              />
              <p className="text-center text-sm font-semibold">
                {expanded ? "Ver menos" : "Descubre todos los departamentos"}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto w-4/5">
        <div className="p-5 w-full">
          <figure className="h-32 rounded-xl overflow-hidden cursor-pointer">
            <img
              className=""
              src="https://cdn2.coppel.com/images/emarketing/homepage/2024/s31/desktop/BannerMedio_S31_desktop.jpg?i10c=img.resize(width:350)?iresize=width:1140,height:98"
              alt="homepage image3"
            />
          </figure>
        </div>
      </div>
      <div className="flex mx-auto w-4/5">
        <div className="m-5 flex w-4/6">
          <figure className=" rounded-xl overflow-hidden">
            <img
              src="https://cdn2.coppel.com/images/emarketing/homepage/2024/s31/desktop/B3.jpg?i10c=img.resize(width:450)?iresize=width:1535,height:792"
              alt="homepage image4"
            />
          </figure>
        </div>
        <div className="flex flex-col m-5 w-2/6">
          <div className="h-2/5 mb-12">
            <figure className="rounded-xl overflow-hidden">
              <img
                src="https://cdn2.coppel.com/images/emarketing/homepage/2024/s31/desktop/B4.jpg?i10c=img.resize(width:450)?iresize=width:746,height:372"
                alt="homepage image5"
              />
            </figure>
          </div>
          <div className="h-2/5">
            <figure className="rounded-xl overflow-hidden">
              <img
                src="https://cdn2.coppel.com/images/emarketing/homepage/2024/s31/desktop/B5.jpg?i10c=img.resize(width:450)?iresize=width:746,height:372"
                alt="homepage image6"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto relative">
        <div className="mx-5 mb-5">
          <p className="font-semibold text-3xl mb-3">Te puede interesar</p>
        </div>
        <div className="mx-5 relative pb-5">
          <div className="flex overflow-hidden space-x-5 transition-transform duration-700 ease-in-out">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
          {showPrevious && (
            <div>
              <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 border border-custom-blue-ligth w-14 h-14 bg-white text-white p-2 rounded-full shadow-lg 10"></div>
              <button
                onClick={handlePrevious}
                className="absolute -left-5 top-1/2 transform -translate-y-1/2 border border-custom-blue-ligth w-14 h-14 bg-white text-white p-2 rounded-full shadow-lg hover:bg-custom-blue-ligth hover:bg-opacity-10"
              >
                <Icon
                  icon={arrowLeftIcon}
                  className="mx-auto text-custom-blue-ligth w-7 h-7"
                />
              </button>
            </div>
          )}
          {showNext && (
            <div>
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2 border border-custom-blue-ligth w-14 h-14 bg-white text-white p-2 rounded-full shadow-lg "></div>
              <button
                onClick={handleNext}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 border border-custom-blue-ligth w-14 h-14 bg-white text-white p-2 rounded-full shadow-lg hover:bg-custom-blue-ligth hover:bg-opacity-10"
              >
                <Icon
                  icon={arrowRightIcon}
                  className="text-custom-blue-ligth mx-auto w-7 h-7"
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-4/5 mx-auto relative ">
        <div className="mx-5 mb-5">
          <p className="font-semibold text-3xl mb-3">
            Encuentra aquí las mejores marcas
          </p>
        </div>
        <div className="mx-5">
          <MarkBar />
        </div>
        <div className="mx-5 pt-2 pb-12 text-custom-blue-ligth font-bold">
          <div className="flex float-end mb-5 cursor-pointer hover:underline">
            Descubre todas las marcas
            <Icon
              icon={arrowRightIcon}
              className="text-custom-blue-ligth my-auto w-5 h-5"
            />
          </div>
        </div>
      </div>
      <div className="w-4/5 h-56 mx-auto relative">
        <BenefitBar />
      </div>
      <Footer />
    </>
  );
};

export default Home;
