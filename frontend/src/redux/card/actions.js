import { createAction } from '@reduxjs/toolkit';

const add = createAction('card/add', (id, name, price, img) => {
  return { payload: { id, name, price, img } };
});
const remove = createAction('card/remove');

const sum = createAction('card/sum', (price, count) => {
  return { payload: { price, count } };
});

const actions = { remove, add, sum };

export default actions;
