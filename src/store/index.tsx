import { configureStore } from "@reduxjs/toolkit";

import countReducer from './features/counter';
import categorySlice from './features/category';

export const store = configureStore({
    reducer: {
        counter: countReducer,
        category: categorySlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
