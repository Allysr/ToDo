import { TaskStyled } from "./styles";
import { Trash } from "phosphor-react";

interface TaskProps {
  task: string;
}

export const Task = (props: TaskProps) => {
  return (
    <TaskStyled>
      <label className="container">
        <input type="checkbox" />
        <span className="text">{props.task}</span>
        <span className="checkmark"></span>
      </label>
      <button>
        <Trash className="trash"size={20} weight="regular" />
      </button>
    </TaskStyled>
  );
};
