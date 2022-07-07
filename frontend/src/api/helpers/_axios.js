import axios from 'axios';

const _axios = axios.create({
  baseURL: 'https://korotenko-test-eliftech.herokuapp.com',
});

export default _axios;
