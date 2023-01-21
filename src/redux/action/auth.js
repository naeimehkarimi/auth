export const addUserData = userData => {
    return async dispatch => {
        await dispatch({ type: "SET_USERDATA", payload:{data:userData} });
    };
};
