import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './actions';

const initialValues = [];

const card = createReducer(initialValues, {
  [actions.add]: (state, { payload }) => [payload, ...state],
  [actions.remove]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const sum = createReducer(initialValues, {
  [actions.sum]: (state, { payload }) => [payload, ...state],
});

export default combineReducers({ card, sum });
