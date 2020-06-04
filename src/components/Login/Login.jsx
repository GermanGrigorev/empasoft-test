import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {authorizeUser} from "../../redux/authReducer";

const Login = (props) => {
    const onLoginFormSubmit = (formData) => {
        props.authorizeUser(formData.login, formData.password);
    };

    return (
        <div>
            <LoginForm
                onSubmit={onLoginFormSubmit}
            />
            is Auth{props.isAuth ? ' true' : ' false'}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
};

export default connect(mapStateToProps, {
    authorizeUser,
})(Login);
