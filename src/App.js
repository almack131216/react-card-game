import React from "react";
import "./App.css";
import { Layout, Header } from "./Layout.components";
import CardGameBoard from "./CardGameBoard";

const App = () => {
  return (
    <div className="App">
      <Header>This is a card game</Header>
      <Layout>
        <CardGameBoard />
      </Layout>
    </div>
  );
};

export default App;
