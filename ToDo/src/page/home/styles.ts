import styled from "styled-components";

export const HomeStyled = styled.body`
    h2 {
      display: flex;
      align-items:center;
      justify-content: center;
      color: ${(props) => props.theme.colors.defaultBlack};
    }
`;