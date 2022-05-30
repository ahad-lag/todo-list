import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        value : []
    },
    reducers : {
        addTodo : (state , actions) => {
            state.value.push(actions.payload.todo)
        }
    }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;