import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '54ffbd98b1cb4c8ca461ed808c3fe8f3'
    }
})