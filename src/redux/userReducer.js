const initialState = {
    userId: null,
    userName: '',
    firstName: '',
    lastName: '',
    isActive: true,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
};

export default userReducer;
