import _axios from 'api/helpers/_axios';

const getWildfowl = async () => {
  const { data } = await _axios.get('/api/shops/wildfowl');
  return data.menu;
};

export default getWildfowl;
