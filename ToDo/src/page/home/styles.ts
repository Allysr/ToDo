import styled from "styled-components";

export const HomeStyled = styled.div`
  margin: 0px 72px;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.defaultBlack};
  }
`;
