import { configureStore } from "@reduxjs/toolkit";
import itemActive from "./Slices/itemActive";

export const store = configureStore({
    reducer:{
         itemActive:itemActive
    }
});
export type RootState = ReturnType<typeof store.getState>;
// store.ts
export type AppDispatch = typeof store.dispatch