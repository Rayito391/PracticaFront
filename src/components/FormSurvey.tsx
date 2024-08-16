import FormSurveyButton from "./FormSurveyButton";
import React, { useState } from "react";
import RadioButton from "./RadioButton";

const FormSurvey: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="border w-110 h-155 p-6">
      <form className="-mt-4 px-1" action="">
        <img
          className="w-60 h-auto mx-auto"
          src="/src/assets/images/logo2.png"
          alt="logoKoppel"
        />
        <p className="text-gray-500  mb-1">
          ¿Qué tan satisfecho estás con tu experiencia general al visitar
          Coppel.com?<span className="text-custom-red">*</span>
        </p>
        <div className="space-x-2 w-full text-center">
          {Array.from({ length: 11 }, (_, index) => (
            <FormSurveyButton key={index} number={index} />
          ))}
        </div>
        <div className="flex justify-between">
          <p className="text-xs text-gray-500">Nada satisfecho</p>
          <p className="text-xs text-gray-500">Muy satisfecho</p>
        </div>
        <p className="text-gray-500 mt-5 mb-1">
          ¿Cuáles son las principales razones por las que otorgas esta
          calificación?
        </p>
        <textarea className="bg-gray-200 border border-black rounded-md w-full h-20"></textarea>
        <p className="text-gray-500 text-md mt-3 mb-2">
          ¿Cumpliste con tu motivo de visita?
        </p>
        <div className="flex space-x-2">
          <RadioButton
            id="optionYes"
            name="options"
            value="Sí"
            checked={selectedValue === "Sí"}
            onChange={handleChange}
          />
          <RadioButton
            id="optionNo"
            name="options"
            value="No"
            checked={selectedValue === "No"}
            onChange={handleChange}
          />
          <RadioButton
            id="optionNotYet"
            name="options"
            value="Aún no termino"
            checked={selectedValue === "Aún no termino"}
            onChange={handleChange}
          />
        </div>
        <div className="mt-8  -ml-2 w-100 mx-auto">
          <p className="text-gray-500">
            La protección de tus datos personales es muy importante para Coppel,
            conoce nuestro aviso de privacidad dando clic
            <span className="text-custom-blue-ligth"> aquí</span>.
          </p>
        </div>
        <div className="flex justify-between mt-16">
          <button className=" border border-custom-blue-ligth text-custom-blue-ligth w-24 py-1 px-5 rounded-full">
            Cerrar
          </button>
          <button className=" bg-custom-blue-ligth border border-custom-blue-ligth text-white w-24 py-1 px-5 rounded-full">
            Enviar
          </button>
        </div>
        <p className="text-gray-500 text-xs float-end mt-7">
          Powered by{" "}
          <span className="font-bold text-sm text-gray-800">Medallia</span>
        </p>
      </form>
    </div>
  );
};
export default FormSurvey;
