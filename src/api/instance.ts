import axios from "axios";

export const api = axios.create(
    {
        baseURL: 'https://611a9dce07346f00173b6054.mockapi.io/api/',
    }
)
