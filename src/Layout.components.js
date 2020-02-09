import styled from "styled-components";

// don't have default after export keyword
const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  text-align: center;
  background-color: green;
  font-size: 24px;
  font-weight: bold;
  color: whitesmoke;
  padding: 15px 0;
`;

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

export { Layout, Header, CardLayout };
