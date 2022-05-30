import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        value : []
    },
    reducers : {
        addTodo : () => {
            return null
        }
    }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;