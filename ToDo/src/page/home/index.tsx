import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { HomeStyled } from "./styles";

export const Home = () => {
  return (
    <HomeStyled>
      <Header/>
      <h2>O que precisa ser feito?</h2>
    </HomeStyled>
  )
}