import axios from 'axios';
export const HTTP = axios.create({
baseURL: 'http://10.0.142.187:3000/',
});