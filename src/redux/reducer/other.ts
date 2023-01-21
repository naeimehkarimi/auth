
export const popupReducer= (state={close:true}, action) => {
    switch (action.type) {
        case "SET_POPUP":
            return {...action.payload};
        default:
            return state;
    }
};

export const minicartPopupReducer= (state={isClose:true}, action) => {
    switch (action.type) {
        case "SET_MINICART_POPUP_CLOSE":
            return {...action.payload};
        default:
            return state;
    }
};

export const searchPopupReducer= (state={isClose:true}, action) => {
    switch (action.type) {
        case "SET_SEARCH_POPUP_CLOSE":
            return {...action.payload};
        default:
            return state;
    }
};