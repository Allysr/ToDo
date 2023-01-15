import { useState } from "react";
import { InputStyled } from "./styles";

interface InputProps {
  placeholder: string;
}

export const Input = (props: InputProps) => {
  const [value, setValue] = useState();


  const handleValue = (e: any) => {
    return setValue(e.target.value)
  }

  return (
    <InputStyled>
      <input placeholder={props.placeholder} onChange={handleValue} />
      <button onClick={ () => alert(value)}>+</button>
    </InputStyled>
  );
};
