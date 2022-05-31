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
        },
        toggleTodo : (state , actions) => {
            state.todoList.forEach(item => {
                if(item.id === actions.payload){
                    item.status = ! item.status
                }
            });
        }
    }
});

export const { addTodo , deleteTodo , toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;