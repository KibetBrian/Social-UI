import { configureStore } from "@reduxjs/toolkit";
import itemActive from "./Slices/itemActive";
import user from "./Slices/userSlice";

export const store = configureStore({
    reducer:{
         itemActive:itemActive,
         user: user
    }
});
export type RootState = ReturnType<typeof store.getState>;
// store.ts
export type AppDispatch = typeof store.dispatch