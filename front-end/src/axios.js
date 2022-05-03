import axios from 'axios';
export const HTTP = axios.create({
baseURL: 'http://ip-10-0-142-187.ap-southeast-1.compute.internal/',
});