export const userReducer = (state = {}, action: { type: any; payload: any; }) => {
  
    switch (action.type) {
        case "SET_USER":
            return { ...action.payload };
        default:
            return state;
    }
};