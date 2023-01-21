export const cartReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case "SET_CARTDATA":
      return { ...action.payload };
    default:
      return state;
  }
};

export const dealershipCartReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "SET_DEALERSHIP_CARTDATA":
      return { ...action.payload };
    default:
      return state;
  }
};

export const dealershipNeworderCartReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "SET_DEALERSHIP_NEWORDWR_CARTDATA":
      return { ...action.payload };
    default:
      return state;
  }
};
