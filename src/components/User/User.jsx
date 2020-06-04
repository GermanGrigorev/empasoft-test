import React, {useState} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {isUserCreated} from "../../redux/userSelectors";
import UserForm from "./UserForm/UserForm";

const User = (props) => {
    const [editMode, setEditMode] = useState(true);

    const onUserFormSubmit = (formData) => {
        setEditMode(false);
    };

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
                            username: {props.userName}
                            First name: {props.firstName}
                            Last name: {props.lastName}
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
        isAuth: state.auth.isAuth,
        isUserCreated: isUserCreated(state),
        userId: state.user.userId,
        userName: state.user.userName,
        firstName: state.user.firstName,
        lastName: state.user.lastName,
    }
};

export default connect(mapStateToProps, {})(User);
