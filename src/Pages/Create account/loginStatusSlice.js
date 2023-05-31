import {createSlice} from "@reduxjs/toolkit"

const loginStatusSlice = createSlice({
    name:"loginSatus",
    initialState: false,

    reducers:{
        updateLoginStatus:(state, action)=>{
             state = action.payload
        },
    }
})

export const {updateLoginStatus} = loginStatusSlice.actions;
export default loginStatusSlice.reducer;