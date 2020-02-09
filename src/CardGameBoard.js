import React, { Component } from "react";
import { createDeckAndDraw, drawCardFromDeck } from "./api";
import { CardLayout } from "./Layout.components";
import ButtonsTab from "./ButtonsTab";
import CompareValues from "./utils";

class CardGameBoard extends Component {
  state = {
    cardImageUrl: null,
    cardValue: null,
    deckId: null,
    result: null
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
    this.setState({
      cardImageUrl: null
    });
    console.log("[CGB] Button was clicked: ", bet);
    const { deckId, cardValue: previousCardValue } = this.state;
    const { value: currentCardValue, image } = await drawCardFromDeck(deckId);
    console.log("[onButtonClick] deckId: ", deckId);
    console.log("[onButtonClick] image: ", image);
    const result = CompareValues({
      previousCardValue,
      currentCardValue,
      bet
    });

    this.setState({
      result,
      cardValue: currentCardValue,
      cardImageUrl: image
    });
  };

  render() {
    console.log("[CardGameBoard] this.state = ", this.state);
    const { result, cardImageUrl } = this.state;
    if (!cardImageUrl) return <h1>Loading...</h1>;
    return (
      <CardLayout>
        {cardImageUrl ? (
          <img src={cardImageUrl} alt="This is your card" />
        ) : null}
        <ButtonsTab onButtonClick={this.onButtonClick} />
        {result && <h2>{`You ${result}`}</h2>}
      </CardLayout>
    );
  }
}

export default CardGameBoard;
