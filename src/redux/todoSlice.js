import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('post/fetchPosts', async()=>{
const 
})
const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        isLoading : false,
        todos : [],
        error : null,
},
extraReducer : (builder) =>{
    builder.addCase(fetchPosts.pending,(state)=>{
        
    })

}
})