import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterslice';

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});