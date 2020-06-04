import {userApi} from "../api/api";

const SET_USER_DATA = 'emphasoft-test/user/SET_USER_DATA';

const initialState = {
    userId: null,
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    isActive: true,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...action.userData,
            };
        default: return state;
    }
};

const setUserData = (userData) => ({type: SET_USER_DATA, userData,});

export const changeUser = (userId, userName, firstName, lastName, password) => {
    return async (dispatch) => {
        const userData = {
            isActive: true,
            userId,
            userName,
            firstName,
            lastName,
            password,
        };

        let response = await userApi.updateUser(userData);
        if (response.resultCode === 0) {
            dispatch(setUserData(userData));
        }
    }
};

export const createUser = (userName, firstName, lastName, password) => {
    return async (dispatch) => {
        const userData = {
            isActive: true,
            userName,
            firstName,
            lastName,
            password,
        };

        let response = await userApi.createUser(userData);
        if (response.resultCode === 0) {
            dispatch(setUserData({...userData, userId: response.data.id}));
        }
    }
};


export default userReducer;
