import styled from "styled-components";

export const TaskStyled = styled.div`
  border: solid 2px #D9D9D9;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 15px;
  width: 476px;
  height: 46px;

  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    justify-content: center;
    gap: 3px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: ${(props) => props.theme.colors.defaultBrown};
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: solid 2px #D9D9D9;
    border-radius: 3px;
    
  }

  .container input:checked ~ .text {
    color: #D9D9D9;
    text-decoration: line-through;

  }

  .container input:checked ~ .checkmark {
    background-color: #0CBC8B;
    border: none;
  }


  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }
  

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    color: red;

  }

  input {
    cursor: pointer;
  }

  label {
    margin-left: 5px;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .trash {
    color: #D9D9D9;
  }

  .trash: hover {
    color: #C55858;
  }
`;
