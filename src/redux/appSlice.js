import { createSlice } from "@reduxjs/toolkit";


export const appSlice = createSlice({
   name:"appSlice",
   initialState:{
    fullname:"Onifade Joshua",
    age:16,
    students:["David", "MM", "Ayomide"]
   },

   reducers:{
      updateFullname:(state)=>{
         state.fullname = "Onifade Pamilerin"
      },

      increaseNum:(state)=>{
         state.age++
      },

      decreaseNum:(state)=>{
         state.age--
      },


      increaseAgeNum:(state, action)=>{
         state.age= state.age+action.payload
      }
   }

})



export default appSlice.reducer;

export const {updateFullname, increaseNum, decreaseNum, increaseAgeNum} = appSlice.actions