import { createAsyncThunk } from '@reduxjs/toolkit';
import _axios from 'api/helpers/_axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    info: {},
    order: [],
    totalPrice: '',
  },
};

const END_POINT = '/api/order';
const fetchData = async (options = {}) => {
  const res = await fetch(`${_axios}/api/order`, options);

  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const saveItem = (endpoint, item, options = {}) => {
  const finalOptions = {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    ...options,
  };
  return fetchData(endpoint, finalOptions);
};

const addOrder = createAsyncThunk('order/addOrder', newContact =>
  saveItem(END_POINT, newContact)
);

const contactsSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: builder => {
    builder.addCase(addOrder.fulfilled, (state, { payload }) => {
      state.data.order(payload);
    });
  },
});
export { addOrder };

export default contactsSlice.reducer;
