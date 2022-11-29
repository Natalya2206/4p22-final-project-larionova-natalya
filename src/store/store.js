import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterslice';
import basketReducer from './basketSlice';
import productsSlice from "./productsSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        basket: basketReducer,
        products: productsSlice
    }
});