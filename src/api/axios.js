import axios from 'axios'


export const axiosClient = axios.create({
    baseURL: 'https://jwt-bearer-auth1.p.rapidapi.com', 
})