import React from "react";

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-2 w-5 h-5 border"
      />
      <label htmlFor={id} className="text-sm">
        {value}
      </label>
    </div>
  );
};

export default RadioButton;
