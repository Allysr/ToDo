import { InputStyled } from "./styles";

interface InputProps {
    placeholder: string;
  }

export const Input = (props: InputProps) => {
  return (
  <InputStyled>
    <input
        placeholder={props.placeholder}
      />
    <button>+</button>
  </InputStyled>
  )
};
