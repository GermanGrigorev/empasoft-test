import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../utils/FormElements";
import {required} from "../../../utils/validators";

const UserForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='username'
                    name='userName'
                    type='text'
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder='First Name'
                    name='firstName'
                    type='text'
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder='Last Name'
                    name='lastName'
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
                <button>Save changes</button>
            </div>
        </form>
    )
};

export default reduxForm({form: 'user'})(UserForm);
