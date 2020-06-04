import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../utils/FormElements";
import {
    maxLength128,
    maxLength150,
    maxLength30,
    passwordPattern,
    required,
    userNamePattern
} from "../../../utils/validators";
import {compose} from "redux";
import {connect} from "react-redux";

const UserForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='username'
                    name='userName'
                    type='text'
                    component={Input}
                    validate={[required, userNamePattern, maxLength150,]}
                />
            </div>
            <div>
                <Field
                    placeholder='First Name'
                    name='firstName'
                    type='text'
                    component={Input}
                    validate={[maxLength30]}
                />
            </div>
            <div>
                <Field
                    placeholder='Last Name'
                    name='lastName'
                    type='text'
                    component={Input}
                    validate={[maxLength150]}
                />
            </div>
            <div>
                <Field
                    placeholder='Password'
                    name='password'
                    type='password'
                    component={Input}
                    validate={[required, maxLength128, passwordPattern]}
                />
            </div>
            {props.error && (
                <div className="FormError-GlobalError">
                    Incorrect login or password
                </div>
            )}
            <div>
                <button>Save changes</button>
            </div>
        </form>
    )
};

export default compose(
    connect(state => ({
        initialValues: state.user
    }), {}),
    reduxForm({form: 'user'}),
)(UserForm);
