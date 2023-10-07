import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



const initialState = {
  
}

export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loginUser: (state)=>{

    }
  },
})

// Action creators are generated for each case reducer function
export const {loginUser } = userReducer.actions

export default userReducer.reducer


export const loginAction = (user)=>{
    return async (dispatch)=>{
        const result = await axios({
            url:"",
            method:"POST",
            data:user
        })

        const result2 = await({
            url:"",
            method:"GET",
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('user')} //JWT
        })



    }
}