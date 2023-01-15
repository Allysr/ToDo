import { useState } from "react";
import { EmptyTask } from "../../components/EmptyTask";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Task } from "../../components/Task";
import { allTodos } from "../../db";
import { HomeStyled } from "./styles";

export const Home = () => {

  const [todo, setTodo] = useState(allTodos);
  
  return (
    <HomeStyled>
      <Header />
      <div className="content">
        <h2>O que precisa ser feito?</h2>
        <Input placeholder={"Escreva aqui sua tarefa..."}></Input>
        <div className="tasks">
          {todo.length > 0 ? (
            todo.map((tarefa) => (
              <Task key={tarefa.id} task={tarefa.titulo}></Task>
            ))
          ) : (
            <EmptyTask></EmptyTask>
          )}
        </div>
      </div>
    </HomeStyled>
  );
};
