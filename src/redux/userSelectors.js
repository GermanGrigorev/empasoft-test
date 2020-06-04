export const getIsUserCreated = (state) => state.user.userId !== null;
export const getUserId = (state) => state.user.userId;
export const getUserName = (state) => state.user.userName;
export const getFirstName = (state) => state.user.firstName;
export const getLastName = (state) => state.user.lastName;
export const getEditMode = (state) => state.user.editMode;
