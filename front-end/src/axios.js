import axios from 'axios';
export const HTTP = axios.create({
baseURL: 'http://172.24.0.2:4000/',
});