export const setClose = (close) => {
    return async dispatch => {     
        await dispatch({ type: "SET_POPUP", payload: {close:close} });      
    };
};

export const setMiniCartClose = (isClose) => {
    return async dispatch => {     
        await dispatch({ type: "SET_MINICART_POPUP_CLOSE", payload: {isClose:isClose} });      
    };
};

export const setSearchClose = (isClose) => {
    return async dispatch => {     
        await dispatch({ type: "SET_SEARCH_POPUP_CLOSE", payload: {isClose:isClose} });      
    };
};