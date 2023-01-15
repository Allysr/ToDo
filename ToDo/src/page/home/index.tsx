import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { HomeStyled } from "./styles";

export const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <div className="content">
        <h2>O que precisa ser feito?</h2>
        <Input
          placeholder={"Escreva aqui sua tarefa..."}
        ></Input>
      </div>
    </HomeStyled>
  );
};
