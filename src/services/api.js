import axios from 'axios';

const api = axios.create({
  baseURL: 'http://159.65.223.29',
});

export default api;
