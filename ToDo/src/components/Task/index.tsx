import { TaskStyled } from "./styles";
import { Trash } from "phosphor-react";

interface TaskProps {
  task: string;
  numero: number;
  handleDelete: (key: number) => void;
}

export const Task = (props: TaskProps) => {
  return (
    <TaskStyled>
      <label className="container">
        <input type="checkbox" />
        <span className="text">{props.task}</span>
        <span className="checkmark"></span>
      </label>
      <button onClick={() => props.handleDelete(props.numero)}>
        <Trash className="trash" size={20} weight="regular" />
      </button>
    </TaskStyled>
  );
};
