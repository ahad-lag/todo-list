import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todoList : [],
        filterTodoFlag : 'undo'
    },
    reducers : {
        addTodo : (state , actions) => {
            state.todoList.push(actions.payload)
        },
        deleteTodo : (state , { payload }) => {
            state.todoList = state.todoList.filter(item => item.id !== payload);
        },
        editTodo : (state , { payload }) => {
            state.todoList.forEach(item => {
                if(item.id === payload.id){
                    item.todo = payload.todo
                }
            });
        },
        toggleTodo : (state , { payload }) => {
            state.todoList.forEach(item => {
                if(item.id === payload){
                    item.status = ! item.status
                }
            });
        }
    }
});

export const { addTodo , deleteTodo , toggleTodo , editTodo } = todoSlice.actions;
export default todoSlice.reducer;