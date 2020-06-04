import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='Login'
                    name='login'
                    type='text'
                    component='input'
                />
            </div>
            <div>
                <Field
                    placeholder='Password'
                    name='password'
                    type='password'
                    component='input'
                />
            </div>
            <div>
                <button>submit</button>
            </div>
        </form>
    )
};

export default reduxForm({form: 'login'})(LoginForm);
