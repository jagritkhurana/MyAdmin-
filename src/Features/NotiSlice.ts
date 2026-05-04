import {createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type user ={
    id:number,
    name:string,
    email:string,
    number:string
}

type userState={
    users:user[],
    selectedUsers:number[],
    search:string,
    SelectMode:"all"|"selected",
}

const initialState:userState={ 
  users:[
    {id:1,name:"Jagrit",email:"jagritkhurana17@gmail.com",number:"8383035280"},
    {id:2,name:"Jagrit",email:"jagritkhurana17@gmail.com",number:"8383035280"},
    {id:3,name:"sonia",email:"sonia@gmail.com",number:"8383035215"},
    {id:4,name:"Ramesh",email:"Ramesh@gmail.com",number:"5633035280"},
    {id:5,name:"Ramesh",email:"Ramesh@gmail.com",number:"5633035280"},
    {id:6,name:"Suresh",email:"suresh@gmail.com",number:"8383035560"},
    {id:7,name:"Ram",email:"ram@gmail.com",number:"9811287990"},
  ],
  selectedUsers:[],
  search:"",
  SelectMode:"all"
}

const NotiSlice=createSlice({
    name:"Noti",
    initialState,
    reducers:{
        ToggleUsers:(state,action:PayloadAction<number>)=>{
            const id=action.payload
            if(state.selectedUsers.includes(id)){
                state.selectedUsers=state.selectedUsers.filter((u)=>u !== id)
            }else{
                state.selectedUsers.push(id)
            }
        },
        setSearch:(state,action:PayloadAction<string>)=>{
            state.search=action.payload
        },
        selectAll:(state)=>{
            state.selectedUsers=state.users.map((user)=>user.id)
        },
        selectMode:(state,action:PayloadAction<"all"|"selected">)=>{
            state.SelectMode=action.payload
        }

    }
})

export const { ToggleUsers,setSearch,selectAll,selectMode}=NotiSlice.actions
export default NotiSlice.reducer