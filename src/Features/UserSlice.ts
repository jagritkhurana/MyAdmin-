import { createSlice,nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type user={
    id:string,
    name:string,
    email:string,
    phone:string, 
    driverType:string,
    subscription:string  ,
    image?:string,
    validationIds:{
        type:string,
        number:string
    }[],

}
type userState={
    users:user[]
}

const initialState:userState={
    users:[]
}

const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
            addUser:(state,action:PayloadAction<Omit<user,"id">>)=>{
                state.users.push({
                    id:nanoid(),
                    ...action.payload
                })

            },
            deleteUser:(state,action:PayloadAction<string>)=>{
                state.users=state.users.filter(user=>user.id!==action.payload)
            },
            updateUser:(state,action:PayloadAction<user>)=>{
                const index=state.users.findIndex(u=>u.id===action.payload.id)

                if(index !== -1){
                    state.users[index]=action.payload   
                }
            }

    }
})

export const {addUser,deleteUser,updateUser}=userSlice.actions
export default userSlice.reducer