import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  margin: 42px 72px;
  align-items: center;
  justify-content: space-between;
  
  nav {
    display: flex;
    gap: 40px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.defaultBlack};
    font-size: 20px;
  }

  a: hover {
    color: ${(props) => props.theme.colors.defaultBrown}
  }

  img {
    height: 50px;
    cursor: pointer;
  }

  .user {
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }

  p {
    cursor: pointer;
  }

  div {
    display: flex;
    color: ${(props) => props.theme.colors.defaultBlack};
    align-items: center;
    font-size: 20px;
    gap: 20px;
  }
`;
