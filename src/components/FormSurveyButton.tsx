interface FormSurveyButtonProps {
  number: number;
}
const FormSurveyButton: React.FC<FormSurveyButtonProps> = ({ number }) => {
  return (
    <button className="border bg-gray-200 rounded-full w-7 h-7 hover:text-custom-blue-ligth hover:border-custom-blue-ligth hover:bg-opacity-30">
      {number}
    </button>
  );
};
export default FormSurveyButton;
