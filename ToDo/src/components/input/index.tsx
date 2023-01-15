import { InputStyled } from "./styles";

interface InputProps {
  placeholder: string;
  handleClick: () =>  void;
}

export const Input = (props: InputProps) => {
  return (
    <InputStyled>
      <input placeholder={props.placeholder} />
      <button onClick={props.handleClick}>+</button>
    </InputStyled>
  );
};
