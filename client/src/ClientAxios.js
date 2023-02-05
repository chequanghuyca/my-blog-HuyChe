import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'https://huyche-api.onrender.com/api',
});

export default clientAxios;