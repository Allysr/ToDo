import { EmptyTask } from "../../components/EmptyTask";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Task } from "../../components/Task";
import { HomeStyled } from "./styles";

export const Home = () => {
  return (
    <HomeStyled>
      <Header />
       <div className="content">
        <h2>O que precisa ser feito?</h2>
        <Input placeholder={"Escreva aqui sua tarefa..."}></Input>
        {/* <div className="tasks">
          <Task task={"OLA"}></Task>
          <Task task={"teste"}></Task>
        </div> */}
        <EmptyTask></EmptyTask>
      </div> 
    </HomeStyled>
  );
};
