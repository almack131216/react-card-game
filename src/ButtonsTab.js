import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;

const Button = styled.button`
  color: ${props => (props.type === "down" ? "black" : "white")};
  background-color: ${props => (props.type === "down" ? "red" : "blue")};
  border: 1px solid black;
  padding: 15px 10px;
  border-radius: 5px;
  min-width: 50px;
`;

const DownButton = styled(Button)`
  background-color: red;
`;

const ButtonsTab = ({ onButtonClick }) => {
  return (
    <ButtonWrapper>
      <Button name="down" onClick={onButtonClick} type="down">
        Down
      </Button>
      <Button name="up" onClick={onButtonClick}>
        Up
      </Button>
    </ButtonWrapper>
  );
};

export default ButtonsTab;
