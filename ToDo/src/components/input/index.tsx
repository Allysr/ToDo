import { useState } from "react";
import { InputStyled } from "./styles";

interface InputProps {
  placeholder: string;
  handleCreate: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const [value, setValue] = useState();

  const handleValue = (e: any) => {
     setValue(e.target.value);
  };

  const handleValuee = (e: any) => {
    alert(value)
 };

  return (
    <InputStyled>
      <input placeholder={props.placeholder} onChange={handleValue} />
      <button onClick={() => props.handleCreate(value!)}>+</button>
    </InputStyled>
  );
};
