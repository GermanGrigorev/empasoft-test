import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {authorizeUser} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onLoginFormSubmit = (formData) => {
        props.authorizeUser(formData.login, formData.password);
    };

    if (props.isAuth) {
        return (
            <Redirect to='/user'/>
        )
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm
                onSubmit={onLoginFormSubmit}
            />
            <p>Username: test_super</p>
            <p>Password: {'Nf<U4f<rDbtDxAPn'}</p>
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
