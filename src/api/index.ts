import axios from 'axios'

export default axios.create({
    baseURL: 'https://blog.cheesecakelabs.com/',
    timeout: 4000,
});