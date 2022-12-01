import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterslice';
import basketReducer from './basketSlice';
import productsSlice from "./productsSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'products',
    storage,
}

const rootReducer = combineReducers({
        counter: counterReducer,
        basket: basketReducer,
        products: productsSlice 
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store)