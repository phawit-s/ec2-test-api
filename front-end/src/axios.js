import axios from 'axios';
export const HTTP = axios.create({
baseURL: 'http://ec2-13-214-81-88.ap-southeast-1.compute.amazonaws.com/',
});