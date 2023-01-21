export const setCategory = (category) => {
    return async dispatch => {     
        await dispatch({ type: "SET_CATEGORY", payload: category });      
    };
};