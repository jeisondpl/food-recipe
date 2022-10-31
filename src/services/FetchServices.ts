import axios from "axios";

export const FetchServices = axios.create({
    baseURL: process.env.REACT_APP_URL,
    params: {
        apiKey: process.env.REACT_APP_API_KEY,
        limitLicense: true
    }
})