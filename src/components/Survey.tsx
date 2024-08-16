import React, { useState } from "react";
import FormSurvey from "./FormSurvey";
const Survey: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <button
        className="fixed w-32 h-9 top-2/4 -right-10 rotate-90 text-center rounded-b-md text-white bg-custom-blue-survey"
        onClick={() => setIsModalOpen(true)}
      >
        Encuesta
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-30 z-50">
          <div className="fixed top-24 bg-white w-110 h-155 shadow-2xl">
            <FormSurvey />
          </div>
        </div>
      )}
    </div>
  );
};

export default Survey;
