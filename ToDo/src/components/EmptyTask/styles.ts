import styled from "styled-components";

export const EmptyTaskStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    p {
        color:${(props) => props.theme.colors.defaultBlack};
    }
`;
