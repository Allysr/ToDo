import styled from "styled-components";

export const HomeStyled = styled.div`
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.defaultBlack};
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px 72px;
    gap: 32px;
  }

  .tasks {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
