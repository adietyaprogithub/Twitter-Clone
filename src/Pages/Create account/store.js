import {configureStore} from "@reduxjs/toolkit"
import loginStatusReducer from "./loginStatusSlice"
const store = configureStore({
    reducer:{
        loginSatus: loginStatusReducer,
    }
})

export default store;