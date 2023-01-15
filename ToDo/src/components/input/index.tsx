import { InputStyled } from "./styles"

interface InputProps {
    children: String,
}

export const Input:React.FC<InputProps> = ({children}) => {
    return (
        <InputStyled>
           {children}
        </InputStyled>
    )
}