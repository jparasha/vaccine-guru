import axios from 'axios';

const interceptor = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || ''
});

export default interceptor;
