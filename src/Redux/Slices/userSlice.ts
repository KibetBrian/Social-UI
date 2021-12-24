import { createSlice } from "@reduxjs/toolkit";
import { IUser } from '../../interfaces';
export const user = createSlice({
    name: 'user',
    initialState: {
        currentUser: null as IUser|null,
        isFetching: false,
        error: false,
    },
    reducers:
    {
        signInStart: (state)=>{
            state.isFetching = true
        },
        signInSuccess: (state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        signInFailure: (state)=>{
            state.error =true
            state.isFetching = false
        }
    }
});

export const {signInStart, signInSuccess, signInFailure} = user.actions;
export default user.reducer;
