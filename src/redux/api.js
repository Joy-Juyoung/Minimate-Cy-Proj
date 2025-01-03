import axios from 'axios';

const baseURL = 'https://minimate-5d1818d6ac3c.herokuapp.com/api/v1';

const API = axios.create({
  baseURL: baseURL,
});

API.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { API };

// const config = require('../config');
// const baseURL = config.API_BASE_URL + '/api/v1';
// const baseURL = process.env.API_BASE_URL + '/api/v1';
