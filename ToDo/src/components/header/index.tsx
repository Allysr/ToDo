import { HeaderStyled } from "./styles"

export const Header = () => {
    return (
        <HeaderStyled>
            <img src="../assets/TODO.svg"></img>
            <nav>
                <a href="#">Home</a>
                <a href="#">Favorites</a>
                <a href="#">Collections</a>
                <a href="#">Calendar</a>
            </nav>
        </HeaderStyled>
    )
}