// components/ProductCard.tsx
import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="flex flex-col bg-white w-56 h-80 border rounded-xl overflow-hidden cursor-pointer">
      <figure className="h-1/2 overflow-hidden">
        <img className="h-40 mx-auto my-1" src={image} alt={title} />
      </figure>
      <div className="h-1/2 pt-5 mx-3">
        <p className="font-light text-lg h-14 overflow-hidden">{title}</p>
        <p className="text-base text-gray-500 mt-2">Precio de contado</p>
        <p className="text-xl font-bold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
