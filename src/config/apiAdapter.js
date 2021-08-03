const axios = require('axios');
const { REACT_APP_API_SERVER } = process.env;
// const errorHandler = require('./errorHandler');

const instance = axios.create({
  baseURL: REACT_APP_API_SERVER,
  timeout: 5000,
});

// instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
