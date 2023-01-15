import { EmptyTaskStyled } from "./styles"

export const EmptyTask = () => {
    return (
        <EmptyTaskStyled>
            <img src="src\assets\Empty.svg"></img>
            <p>Sem tarefas por aqui...</p>
        </EmptyTaskStyled>
    )
}