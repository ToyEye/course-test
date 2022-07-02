import _axios from 'api/helpers/_axios';

const getSteak = async () => {
  const { data } = await _axios.get('/api/shops/steak');
  return data.menu;
};

export default getSteak;
