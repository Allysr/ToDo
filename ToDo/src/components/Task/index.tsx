import { TaskStyled } from "./styles";
import { Trash } from "phosphor-react";
import { useState } from "react";

interface TaskProps {
  task: string;
  numero: number;
  handleDelete: (key: number) => void;
}

export const Task = (props: TaskProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleFinish = () => {
    setIsActive(!isActive)
  };


  return (
    <TaskStyled>
      <label className="container">
        <input type="checkbox" />
        <span className="text">{props.task}</span>
        <span className="checkmark" onClick={handleFinish}></span>
      </label>
      <button onClick={() => props.handleDelete(props.numero)}>
        <Trash className="trash" size={20} weight="regular" />
      </button>
    </TaskStyled>
  );
};
