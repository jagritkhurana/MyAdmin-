import { createSlice } from "@reduxjs/toolkit";
import  type { PayloadAction } from "@reduxjs/toolkit";

type StaticState={
    terms:string
}

const initialState:StaticState={
    terms:`<h1>Terms & Conditions</h1>
    <p>We value our companies terms and conditions if yopu want to update something pls Go ahead....</p>`
}

const StaticSlice=createSlice({
    name:'Static',
    initialState,
    reducers:{
        updateTerms:(state,action:PayloadAction<string>)=>{
            state.terms=action.payload
        }
    }
    
})

export const {updateTerms}=StaticSlice.actions
export default StaticSlice.reducer
