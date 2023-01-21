export const setCartData= (cartData) => {
    return async dispatch => {     
        await dispatch({ type: "SET_CARTDATA", payload:  {data:cartData} });      
    };
};

export const setDealershipCartData= (cartData) => {
    return async dispatch => {     
        await dispatch({ type: "SET_DEALERSHIP_CARTDATA", payload:  {data:cartData} });      
    };
};


export const setDealershipNeworderCartData= (cartData) => {
    return async dispatch => {     
        await dispatch({ type: "SET_DEALERSHIP_NEWORDWR_CARTDATA", payload:  {data:cartData} });      
    };
};