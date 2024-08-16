const OfferBanner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-12 bg-custom-red">
      <p className="text-white font-semibold">
        Aprovecha Hot Fashion del 12 al 19 de agosto 2024
      </p>
      <button className="rounded-full text-xs px-4 py-1.5 ml-5 text-custom-blue-ligth bg-white font-bold hover:underline">
        Ver ofertas
      </button>
    </div>
  );
};

export default OfferBanner;
