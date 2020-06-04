import * as axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://emphasoft-test-assignment.herokuapp.com/',
    headers: {
        'Content-type': 'application/json',
    },
});

export const authApi = {
    async getAuthToken(username, password) {
        const data = {username, password};
        try {
            const response = await axiosInstance.post('/api-token-auth/', data);
            axiosInstance.defaults.headers.common['Authorization'] = `Token ${response.data.token}`;
            return true;
        } catch (e) {
            return false;
        }
    },
};


