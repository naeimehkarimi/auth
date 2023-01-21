
export const authReducer = (state = { data: [] }, action) => {
    switch (action.type) {
      case "SET_USERDATA":
        return { ...action.payload };
      default:
        return state;
    }
  };