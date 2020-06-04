import React, {useState} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getFirstName, getLastName, getUserId, getUserName, getIsUserCreated} from "../../redux/userSelectors";
import UserForm from "./UserForm/UserForm";
import {getIsAuth} from "../../redux/authSelectors";
import {changeUser, createUser} from "../../redux/userReducer";

const User = (props) => {
    const onUserFormSubmit = (formData) => {
        if (props.isUserCreated) {
            props.changeUser(props.userId, formData.userName, formData.firstName, formData.lastName, formData.password);
        } else {
            props.createUser(formData.userName, formData.firstName, formData.lastName, formData.password)
        }

        setEditMode(false);
    };

    const [editMode, setEditMode] = useState(false);

    if (!props.isAuth) {
        return (
            <Redirect to='/login'/>
        )
    }
    return (
        <div>
            {!editMode && (
                <div>
                    {props.isUserCreated && (
                        <div>
                            <p>username: {props.userName}</p>
                            <p>First name: {props.firstName}</p>
                            <p>Last name: {props.lastName}</p>
                        </div>
                    )}
                    <button onClick={() => setEditMode(true)}>
                        {props.isUserCreated ? 'Change User' : 'Create User'}
                    </button>
                </div>
            )}
            {editMode && (
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
    }
};

export default connect(mapStateToProps, {
    changeUser,
    createUser,
})(User);
