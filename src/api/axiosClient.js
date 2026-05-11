import axios from 'axios';

// se conencta con el back de usuarios
const axiosClient = axios.create({
    baseURL: 'http://localhost:8081/api', // url api usuarios
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient;