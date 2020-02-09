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
  const { deck_id: deckId } = data;

  const { data: cardResponse } = await api.get(`${deckId}/draw/`, {
    params: { count: 1 }
  });
  console.log("[api] cardResponse = ", cardResponse);

  return { ...cardResponse.cards[0], deckId };
};

export { createDeckAndDraw };
