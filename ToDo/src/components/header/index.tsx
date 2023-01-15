import { HeaderStyled } from "./styles"

export const Header = () => {
    return (
        <HeaderStyled>
            <img src="src\assets\TODO.svg"></img>
            <nav>
                <a href="#">Home</a>
                <a href="#">Favoritos</a>
                <a href="#">Coleções</a>
                <a href="#">Calendario</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
            </nav>
            <div>
                <p>Ana</p>
                <img className="user" src="src\assets\Person.png"></img>
            </div>
        </HeaderStyled>
    )
}