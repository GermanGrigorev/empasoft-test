import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {
    getFirstName,
    getLastName,
    getUserId,
    getUserName,
    getIsUserCreated,
    getEditMode
} from "../../redux/userSelectors";
import UserForm from "./UserForm/UserForm";
import {getIsAuth} from "../../redux/authSelectors";
import {changeUser, createUser, setEditMode} from "../../redux/userReducer";

const User = (props) => {
    const onUserFormSubmit = (formData) => {
        if (props.isUserCreated) {
            props.changeUser(props.userId, formData.userName, formData.firstName, formData.lastName, formData.password);
        } else {
            props.createUser(formData.userName, formData.firstName, formData.lastName, formData.password)
        }
    };

    if (!props.isAuth) {
        return (
            <Redirect to='/login'/>
        )
    }
    return (
        <div>
            {!props.editMode && (
                <div>
                    {props.isUserCreated && (
                        <div>
                            <p>username: {props.userName}</p>
                            <p>First name: {props.firstName}</p>
                            <p>Last name: {props.lastName}</p>
                        </div>
                    )}
                    <button onClick={() => props.setEditMode(true)}>
                        {props.isUserCreated ? 'Change User' : 'Create User'}
                    </button>
                </div>
            )}
            {props.editMode && (
                <UserForm onSubmit={onUserFormSubmit}/>
            )}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        isUserCreated: getIsUserCreated(state),
        userId: getUserId(state),
        userName: getUserName(state),
        firstName: getFirstName(state),
        lastName: getLastName(state),
        editMode: getEditMode(state),
    }
};

export default connect(mapStateToProps, {
    changeUser,
    createUser,
    setEditMode,
})(User);
