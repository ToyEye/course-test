const getCard = state => state.addCard;
const getCards = state => state.card.items;

const getSum = state =>
  state.items.reduce((acc, item) => acc + item.price * item.count, 0);

const actions = { getCards, getSum, getCard };

export default actions;
