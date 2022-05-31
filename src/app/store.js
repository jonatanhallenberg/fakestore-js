import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import productsReducer from './productsSlice';

export default configureStore({
    reducer: {
        count: counterReducer,
        products: productsReducer
    }
})