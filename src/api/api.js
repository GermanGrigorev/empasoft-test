import * as axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://emphasoft-test-assignment.herokuapp.com/',
    headers: {
        'Content-type': 'application/json',
    },
});

export const authApi = {
    getAuthToken(username, password) {
        const data = {username, password};
        return axiosInstance.post('/api-token-auth/', data)
            .then(response => {
                axiosInstance.defaults.headers.common['Authorization'] = `Token ${response.data.token}`;
                return true;
            })
            .catch(error => {
                return false;
            })
    },
};

export const userApi = {
    createUser(userData) {
        return axiosInstance.post('/api/v1/users/', {
            username: userData.userName,
            first_name: userData.firstName,
            last_name: userData.lastName,
            is_active: userData.isActive,
            password: userData.password,
        }).then(response => {
            return {
                resultCode: 0,
                data: response.data,
            };
        }).catch(error => {
            return {
                resultCode: 1,
                data: error.response.data,
            };
        })
    },
    updateUser(userData) {
        return axiosInstance.put(`/api/v1/users/${userData.userId}/`, {
            username: userData.userName,
            first_name: userData.firstName,
            last_name: userData.lastName,
            is_active: userData.isActive,
            password: userData.password,
        }).then(response => {
            return {
                resultCode: 0,
                data: response.data
            }
        }).catch(error => {
            console.log(error.response);
            return {
                resultCode: 1,
                data: error.response.data,
            };
        })
    }
};


