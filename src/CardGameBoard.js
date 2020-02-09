import React, { Component } from "react";
import { createDeckAndDraw } from "./api";
import { CardLayout } from "./Layout.components";
import ButtonsTab from "./ButtonsTab";

class CardGameBoard extends Component {
  state = {
    cardImageUrl: null,
    cardValue: null,
    deckId: null
  };

  componentDidMount = async () => {
    const { deckId, value, image } = await createDeckAndDraw();
    this.setState({
      deckId,
      cardValue: value,
      cardImageUrl: image
    });
  };

  render() {
    console.log("[CardGameBoard] this.state = ", this.state);
    return (
      <CardLayout>
        {this.state.cardImageUrl ? (
          <img src={this.state.cardImageUrl} alt="This is your card" />
        ) : null}
        <ButtonsTab />
      </CardLayout>
    );
  }
}

export default CardGameBoard;
