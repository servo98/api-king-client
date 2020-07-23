import axios from 'axios';

export const services = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {'authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1ZjE5MGI4YjZkMmMwZjdhMzRjYTNlM2IifQ.wN-aDhD5vEXuIi1mF45SEeQV6A5S4QZ5g-X__F_YIhY'}
});
  