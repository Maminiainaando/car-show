import axios from 'axios';

const api = axios.create({
    baseURL: 'https://votre-api.com', 
});

export default api;
