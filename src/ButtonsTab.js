import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;

const Button = styled.button`
  color: white;
  background-color: blue;
  border: 1px solid black;
  padding: 15px 10px;
  border-radius: 5px;
  min-width: 50px;
`;

const ButtonsTab = () => {
  return (
    <ButtonWrapper>
      <Button>Down</Button>
      <Button>Up</Button>
    </ButtonWrapper>
  );
};

export default ButtonsTab;
