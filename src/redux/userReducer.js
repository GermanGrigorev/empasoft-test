import {userApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'emphasoft-test/user/SET_USER_DATA';
const SET_EDIT_MODE = 'emphasoft-test/user/SET_EDIT_MODE';

const initialState = {
    userId: null,
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    isActive: true,
    editMode: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
            };
        case SET_EDIT_MODE :
            return {
                ...state,
                editMode: action.value,
            };
        default: return state;
    }
};

const setUserData = (userData) => ({type: SET_USER_DATA, userData,});
export const setEditMode = (value) => ({type: SET_EDIT_MODE, value});

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
            dispatch(setEditMode(false))
        } else {
            dispatch(stopSubmit('user', {_error: 'Some server error'}))
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
            dispatch(setEditMode(false));
        } else {
            if (response.data.username) {
                dispatch(stopSubmit('user', {userName: response.data.username}))
            } else {
                dispatch(stopSubmit('user', {_error: 'Some server error'}))
            }
        }
    }
};


export default userReducer;
