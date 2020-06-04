import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import userReducer from "./userReducer";

const reducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    form: formReducer,
});

const store = createStore(
    reducers,
    applyMiddleware(thunk),
);

export default store;

