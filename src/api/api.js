import * as axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://emphasoft-test-assignment.herokuapp.com/',
    headers: {
        'Authorization': '',
    },
});

export const authApi = {
    async getAuthToken(username, password) {
        const data = {username, password};
        const response = await axiosInstance.post('/api-token-auth/', data);
        if (response.status === 200) {
            axiosInstance.defaults.headers.common['Authorization'] = response.data.token;
            return true;
        }
        return false;
    },
};


