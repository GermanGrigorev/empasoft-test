import React from 'react';
import {Field, reduxForm} from 'redux-form';
import './LoginForm.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='Login'
                    name='login'
                    type='text'
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder='Password'
                    name='password'
                    type='password'
                    component={Input}
                    validate={[required]}
                />
            </div>
            {props.error && (
                <div className="FormError-GlobalError">
                    Incorrect login or password
                </div>
            )}
            <div>
                <button>submit</button>
            </div>
        </form>
    )
};

const Input = ({input, meta, ...props}) => {
    const inputClassName = meta.touched && meta.error ? 'FormError-Input' : null;
    return (
        <>
            <input {...input}{...props} className={inputClassName}/>
            {meta.touched && meta.error && (
                <span className='FormError-Text'>{meta.error}</span>
            )}
        </>
    )
};

const required = (value) => {
    if (value) return undefined;
    return 'Field is required'
};

export default reduxForm({form: 'login'})(LoginForm);
