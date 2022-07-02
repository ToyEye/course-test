import { createAction } from '@reduxjs/toolkit';

const add = createAction('card/add');
const remove = createAction('card/remove');

const addCard = createAction('addCard/add', (id, name, price, img) => {
  return { payload: { id, name, price, img } };
});

const actions = { remove, add, addCard };

export default actions;
