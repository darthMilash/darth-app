import axios from 'axios';

export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:4001',
        responseType: 'json'
    }
)