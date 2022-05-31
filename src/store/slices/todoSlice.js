import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todoList : []
    },
    reducers : {
        addTodo : (state , actions) => {
            state.todoList.push(actions.payload)
        },
        deleteTodo : (state , { payload }) => {
            state.todoList = state.todoList.filter(item => item.id !== payload);
        }
    }
});

export const { addTodo , deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;