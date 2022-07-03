import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './actions';
import orderReducer from 'api/order/order';

const initialValuesCard = [];
const initialValuesSum = { items: [] };

const card = createReducer(initialValuesSum, {
  [actions.add]: (state, { payload }) => {
    if (state.items.find(item => item.id === payload.id)) {
      return {
        items: state.items.map(item => {
          if (item.id === payload.id) {
            return { ...item, count: payload.count };
          }
          return item;
        }),
      };
    }
  },
});

const addCard = createReducer(initialValuesCard, {
  [actions.addCard]: (state, { payload }) => [payload, ...state],
  [actions.remove]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

export default combineReducers({
  card,
  addCard,
  orderReducer,
});
