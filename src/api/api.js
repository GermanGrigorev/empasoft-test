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

export const usersApi = {
    createUser(userName, firstName, lastName, password, isActive) {
        return axiosInstance.post('/api/v1/users/', {
            username: userName,
            first_name: firstName,
            last_name: lastName,
            is_active: isActive,
            password,
        }).then(response => {
            return {
                resultCode: 0,
                data: response.data,
            };
        }).catch(error => {
            return {
                resultCode: 1,
                data: error.response,
            };
        })
    },
    updateUser(userId, userName, firstName, lastName, password, isActive) {
        return axiosInstance.put(`/api/v1/users/${userId}`, {
            username: userName,
            first_name: firstName,
            last_name: lastName,
            is_active: isActive,
            password,
        }).then(response => {
            return {
                resultCode: 0,
                data: response.data
            }
        }).catch(error => {
            return {
                resultCode: 1,
                data: error.response,
            };
        })
    }
};


