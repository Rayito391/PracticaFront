import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const OrderForm: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Permitir solo números y limitar a 18 caracteres
    if (/^\d*$/.test(value) && value.length <= 18) {
      setTrackingNumber(value);
      // Validar si el input tiene exactamente 18 dígitos numéricos
      setIsValid(/^\d{18}$/.test(value));
    }
  };

  return (
    <div className="w-144 h-72 rounded-lg mx-auto -mt-1 bg-white border border-white shadow-2xl">
      <div>
        <p className="font-semibold ml-5 mt-16">Escribe tu número de seguimiento</p>
        <div className="flex items-center ml-5">
          <input
            type="text"
            className={`border-t-4 ${isValid ? 'border-green-400' : 'border-gray-400'} shadow-t-md w-128 py-3`}
            value={trackingNumber}
            onChange={handleChange}
            maxLength={18}
            inputMode="numeric"
            pattern="\d*"
          />
          <Icon
            icon={isValid ? "fluent:checkmark-12-filled" : trackingNumber.length > 0 ? "gravity-ui:xmark" : ""}
            className={isValid ? "text-custom-blue-ligth w-7 h-7 ml-2 mr-4" : "text-red-500 w-7 h-7 ml-2 mr-4"}
          />
          <Icon
            icon="majesticons:question-circle"
            className="text-custom-blue-ligth w-7 h-7 mr-16"
          />
        </div>
        {!isValid && trackingNumber.length > 0 && (
          <p className="text-red-500 text-sm ml-5">¡Sigue, sigue!, son 18 números</p>
        )}
        <button
          className={`mx-5 ${isValid ? 'bg-custom-blue-ligth' : 'bg-gray-400'} w-128 py-3 mt-5 rounded-lg text-white text-sm`}
          disabled={!isValid}
        >
          Buscar pedido
        </button>
        <div className="text-sm mx-auto text-center mt-3">
          <p className="text-gray-800">
            <span className="text-custom-blue-ligth cursor-pointer hover:underline">Iniciar sesión</span> si ya tienes una cuenta
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
