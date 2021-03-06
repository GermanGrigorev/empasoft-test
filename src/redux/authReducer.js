import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'emphasoft-test/auth/SET_AUTH_DATA';

const initialState = {
    userName: '',
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                userName: action.userName,
                isAuth: true,
            };
        default:
            return state;
    }
};

const setAuthData = (userName) => ({type:SET_AUTH_DATA, userName});

export const authorizeUser = (userName, password) => {
    return async (dispatch) => {
        const isAuthSuccess = await authApi.getAuthToken(userName, password);
        if (isAuthSuccess) {
            dispatch(setAuthData(userName));
        } else {
            dispatch(stopSubmit('login', {_error: 'Incorrect login or password!'}))
        }
    }
};
export default authReducer;
