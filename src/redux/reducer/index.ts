import { combineReducers } from 'redux';
import {authReducer } from './auth';
import { cartReducer, dealershipCartReducer, dealershipNeworderCartReducer } from './cart';
import { categoryReducer } from './category';
import { dealershipUserReducer } from './dealership';
import { minicartPopupReducer, popupReducer, searchPopupReducer } from './other';
import { userReducer } from './user';

export const reducers = combineReducers({
    auth:authReducer,
    user:userReducer,
    urerPopup:popupReducer,
    minicartPopup:minicartPopupReducer,
    category:categoryReducer,
    cart:cartReducer,
    dealershipCart:dealershipCartReducer,
    dealershipNeworderCart:dealershipNeworderCartReducer,
    dealershipUser:dealershipUserReducer,
    searchPopup:searchPopupReducer 
});

//This RootState is required to use useSelector later on 
export type RootState = ReturnType<typeof reducers>;