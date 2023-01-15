import { InputStyled } from "./styles";

interface InputProps {
  placeholder: string;
}

const handleAddTask = () => {
   return alert('olá');
}

export const Input = (props: InputProps) => {
  return (
    <InputStyled>
      <input placeholder={props.placeholder} />
      <button onClick={handleAddTask}>+</button>
    </InputStyled>
  );
};
