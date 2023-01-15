import styled from "styled-components";

export const InputStyled = styled.label`
  border: solid 2px ${(props) => props.theme.colors.defaultBlack};
  border-radius: 8px;
  width: 557px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 10px;

  input {
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    background: transparent;
    color: ${(props) => props.theme.colors.defaultBrown};
    cursor: pointer;
    font-size:18px
  }

  input:focus-visible {
    outline: none;
  }

  button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.defaultBG};
    background-color: ${(props) => props.theme.colors.defaultBrown};
    cursor: pointer;
    font-size:18px;
  }
`;
