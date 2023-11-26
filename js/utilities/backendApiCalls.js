import 'https://unpkg.com/axios/dist/axios.min.js'
import { API_URL } from './constants.js';


export const registerUser = async (user) => {
    const url = `${API_URL}/auth/register`;
    const response = await axios.post(url, user);
    return response.data;
};