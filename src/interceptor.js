import axios from 'axios';

const URL = (process.env.NODE_ENV === 'production') ? (process.env.REACT_APP_BASE_URL || '') : (process.env.REACT_APP_BASE_URL_DEV || '');
console.log(URL);
const interceptor = axios.create({
    baseURL: URL
});

export default interceptor;
