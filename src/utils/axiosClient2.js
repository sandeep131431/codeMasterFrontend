import axios from "axios"

const axiosClient2 =  axios.create({
    baseURL: 'https://code-ace-backend2.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient2;

