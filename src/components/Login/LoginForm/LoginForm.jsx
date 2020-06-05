import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required} from "../../../utils/validators";
import {Input} from "../../../utils/FormElements";

const LoginForm = (props) => {
    return (
        <form
            className='Form'
            onSubmit={props.handleSubmit}
        >
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
                    {props.error}
                </div>
            )}
            <div>
                <button className='Form-Button'>submit</button>
            </div>
        </form>
    )
};

export default reduxForm({form: 'login'})(LoginForm);
