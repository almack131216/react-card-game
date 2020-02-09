import React, { Component } from "react";
import { createDeckAndDraw, drawCardFromDeck } from "./api";
import { CardLayout } from "./Layout.components";
import ButtonsTab from "./ButtonsTab";

class CardGameBoard extends Component {
  state = {
    cardImageUrl: null,
    cardValue: null,
    deckId: null
  };

  async componentDidMount() {
    const { deckId, value, image } = await createDeckAndDraw();
    console.log("[CGB] componentDidMount() > deckId: ", deckId);
    this.setState({
      deckId,
      cardValue: value,
      cardImageUrl: image
    });
  }

  onButtonClick = async ({ target: { name: bet } }) => {
    console.log("[CGB] Button was clicked: ", bet);
    const { deckId, value: previousValue } = this.state;
    const { value, image } = await drawCardFromDeck(deckId);
    console.log("[onButtonClick] deckId: ", deckId);
    console.log("[onButtonClick] image: ", image);
  };

  render() {
    console.log("[CardGameBoard] this.state = ", this.state);
    return (
      <CardLayout>
        {this.state.cardImageUrl ? (
          <img src={this.state.cardImageUrl} alt="This is your card" />
        ) : null}
        <ButtonsTab onButtonClick={this.onButtonClick} />
      </CardLayout>
    );
  }
}

export default CardGameBoard;
