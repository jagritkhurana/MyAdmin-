import { createSlice} from "@reduxjs/toolkit" 
import type { PayloadAction } from "@reduxjs/toolkit";

type AuthState={

    isAuthenticated:boolean,
    UserType:string|null,
    email: string|null;
}

const initialState:AuthState={
    isAuthenticated:false,
    UserType:null,
    email: null
}

const AuthSlice=createSlice({
    name:"Auth",
    initialState,
    reducers:{
        login:(state,action:PayloadAction<{UserType:string,email:string}>)=>{
            state.isAuthenticated=true
            state.UserType=action.payload.UserType
        },
        logout:(state)=>{
            state.isAuthenticated=false
            state.UserType=null
        }

    }
})

export const { login,logout}=AuthSlice.actions
export default AuthSlice.reducer