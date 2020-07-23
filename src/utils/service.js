import axios from 'axios';

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  transformRequest: [function (data, headers) {
    headers['Authorization'] = `Bearer ${window.localStorage.getItem('token')}`;
    return JSON.stringify(data)
  }]
});


export default service;
