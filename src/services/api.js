import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v8.api.storemate.parallaxtec.com/api',
});

export default api;
