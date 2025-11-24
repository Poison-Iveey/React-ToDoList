import axios from 'axios';
const API = axios.create({ baseURL: '/api/todos' }); // note: proxied in nginx / docker
export default API;
