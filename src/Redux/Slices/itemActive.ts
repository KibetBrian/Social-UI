import { createSlice } from "@reduxjs/toolkit";

interface Actions{
    payload: number
    type: string
}
export const itemActive = createSlice({
    name: 'itemActive',
    initialState: 1,
    reducers:
    {
        changeItem: (state, action:Actions)=>{
                return state=action.payload
        }
    }
});

export const { changeItem } = itemActive.actions;
export default itemActive.reducer;
