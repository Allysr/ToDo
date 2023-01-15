import { useEffect, useMemo, useState } from "react";
import { EmptyTask } from "../../components/EmptyTask";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Task } from "../../components/Task";
import { TodoInterface } from "../../interface/TodoInterface";
import { HomeStyled } from "./styles";

export const Home = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const handleDelete = (numero: number) => {
    setTodos(todos.filter(item => item.id !== numero));
  };

  const handleCreate = (value: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        titulo: value
      },
    ]);
  };

  return (
    <HomeStyled>
      <Header />
      <div className="content">
        <h2>O que precisa ser feito?</h2>
        <Input
          placeholder={"Escreva aqui sua tarefa..."}
          handleCreate={handleCreate}
        ></Input>
        <div className="tasks">
          {todos!.length > 0 ? (
            todos!.map((task) => (
              <Task
                key={task.id}
                numero={task.id}
                task={task.titulo}
                handleDelete={handleDelete}
              ></Task>
            ))
          ) : (
            <EmptyTask></EmptyTask>
          )}
        </div>
      </div>
    </HomeStyled>
  );
};
