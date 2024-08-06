import { Icon } from "@iconify/react";

const UbiFooter: React.FC = () => {
  return (
    <>
      <footer className="flex flex-col bg-custom-dark-blue-x2 h-80">
        <div className="flex justify-between w-3/5 h-14 mx-auto mt-4">
          <div className="flex items-center">
            <p className="font-bold text-white text-sm">COMPRA SEGURA</p>
            <figure className="w-20 h-8 bg-white ml-2 rounded-md">
              <img
                className="w-4/5 ml-2 mt-1"
                src="https://ekata.com/wp-content/uploads/2023/08/accertify.svg"
                alt="Accertify"
              />
            </figure>
            <figure className="w-20 h-8 bg-white ml-2 rounded-md">
              <img
                className="w-4/5 ml-2 mt-1"
                src="https://compusoftme.com/wp-content/uploads/2023/01/230-2308139_if-you-purchase-a-globalsign-ssl-certificate-youll.png"
                alt="Secure"
              />
            </figure>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-bold text-white text-sm mr-3">
              DESCARGA NUESTRA APP KOPPEL
            </p>
            <figure className="w-28 h-8 bg-white overflow-hidden flex justify-center items-center rounded-lg">
              <img
                className="w-96 h-8 object-cover"
                src="https://w7.pngwing.com/pngs/30/487/png-transparent-google-play-app-store-google-angle-text-logo.png"
                alt="Google Play"
              />
            </figure>
            <figure className="w-28 h-8 bg-white overflow-hidden flex justify-center items-center rounded-lg">
              <img
                className="w-full h-full object-cover"
                src="https://w7.pngwing.com/pngs/323/118/png-transparent-available-on-the-app-store-hd-logo.png"
                alt="App Store"
              />
            </figure>
            <figure className="relative w-28 h-8 bg-white overflow-hidden flex justify-center items-center rounded-lg">
              <img
                className="absolute w-40 object-fill"
                src="https://logowik.com/content/uploads/images/explore-it-on-huawei-appgallery1858.jpg"
                alt="Huawei AppGallery"
              />
            </figure>
          </div>
        </div>
        <div className="flex items-center w-3/5 h-14 mx-auto mt-7 ">
          <ul className="flex text-sm underline text-white gap-12 ml-10">
            <li>Aviso de privacidad</li>
            <li>Términos y condiciones</li>
            <li>Aviso de no discriminación</li>
            <li>Seguridad en Koppel.com</li>
            <li>Mapa del sitio</li>
            <li className="flex">
              <Icon
                icon="openmoji:flag-argentina"
                className="w-6 h-auto mr-2"
              />
              Coppel Argentina
            </li>
          </ul>
        </div>
        <div className="w-3/5 mx-auto text-sm text-center text-white mt-9">
          <p>
            Todos los precios en Coppel.com son en pesos mexicanos e incluyen
            impuestos. Los precios y promociones de nuestro sitio web son
            exclusivos de Coppel.com. Los abonos quincenales, el plazo o el pago
            inicial pueden variar según el margen de crédito y el historial de
            pago de cada cliente. Los quincenales contemplan: 24, 36, 48, 60 o
            72 quincenas para muebles y 24 quincenas para ropa. Los productos de
            Marketplace que lleves con tu crédito Coppel, cuentan con un plazo
            de 24 quincenas y son financiados con Coppel Pay.
          </p>
        </div>
        <div className="text-white text-sm w-auto mx-auto mt-5">
          2024 &copy; Koppel todos los derechos reservados
        </div>
      </footer>
    </>
  );
};

export default UbiFooter;
