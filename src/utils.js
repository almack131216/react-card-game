const cardValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "JACK",
  "QUEEN",
  "KING",
  "ACE"
];

const CompareValues = ({ previousCardValue, currentCardValue, bet }) => {
  console.log(
    "[utile] CompareValues() > ",
    previousCardValue,
    currentCardValue,
    bet
  );

  const previousCardValueIndex = cardValues.indexOf(previousCardValue);
  const currentCardValueIndex = cardValues.indexOf(currentCardValue);

  if (previousCardValueIndex === -1 || currentCardValueIndex === -1) {
    throw new Error("Supplied card value not found in cardValues array");
  }

  if (bet === "up" && previousCardValueIndex >= currentCardValueIndex) {
    return "lose";
  }
  if (bet === "up" && previousCardValueIndex < currentCardValueIndex) {
    return "win";
  }
  if (bet === "down" && previousCardValueIndex <= currentCardValueIndex) {
    return "lose";
  }
  if (bet === "down" && previousCardValueIndex > currentCardValueIndex) {
    return "win";
  }
};

export default CompareValues;
