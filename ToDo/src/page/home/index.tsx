import { EmptyTask } from "../../components/EmptyTask";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Task } from "../../components/Task";
import { tarefas } from "../../databaseFake";
import { HomeStyled } from "./styles";



const handleGetInput = () => {
  alert('bla')
}

export const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <div className="content">
        <h2>O que precisa ser feito?</h2>
        <Input placeholder={"Escreva aqui sua tarefa..."} handleClick={handleGetInput}  ></Input>
        <div className="tasks">
          {tarefas.length > 0 ? (
            tarefas.map((tarefa) => <Task task={tarefa.tarefa}></Task>)
          ) : (
            <EmptyTask></EmptyTask>
          )}
        </div>
      </div>
    </HomeStyled>
  );
};
