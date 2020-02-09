import axios from "axios";

const api = axios.create({
  baseURL: "https://deckofcardsapi.com/api/deck/"
});

const createDeckAndDraw = async () => {
  const { data } = await api.get("new/shuffle/", {
    params: {
      deck_count: 1
    }
  });

  console.log("[api] response = ", data);
  const { deck_id } = data;

  const cardResponse = await drawCardFromDeck(deck_id);
  console.log("[api] cardResponse = ", cardResponse);

  return cardResponse;
};

const drawCardFromDeck = async deckId => {
  console.log("[api] drawCardFromDeck() > deckId: ", deckId);
  const { data } = await api.get(`${deckId}/draw/`, {
    params: {
      count: 1
    }
  });
  console.log("????", data);
  const { cards } = data;
  const { value, image } = cards[0];
  return { deckId, value, image };
};

export { drawCardFromDeck, createDeckAndDraw };
