export const addUser = (user) => {
   
    return async (dispatch: (arg0: { type: string; payload: any; }) => any) => {     
        await dispatch({ type: "SET_USER", payload: user});      

    };
};