import { HeaderStyled } from "./styles"

export const Header = () => {
    return (
        <HeaderStyled>
            <img src="src\assets\TODO.svg"></img>
            <nav>
                <a href="#">Home</a>
                <a href="#">Favorites</a>
                <a href="#">Collections</a>
                <a href="#">Calendar</a>
            </nav>
            <div>
                <p>Ana Luiza</p>
                <img className="user" src="src\assets\Person.png"></img>
            </div>
        </HeaderStyled>
    )
}