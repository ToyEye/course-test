import _axios from 'api/helpers/_axios';

const getBurgers = async () => {
  const { data } = await _axios.get('/api/shops/burger');
  return data.menu;
};

export default getBurgers;
