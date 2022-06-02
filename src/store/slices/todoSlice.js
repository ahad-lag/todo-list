import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todoList : [],
        filterTodoFlag : 'all'
    },
    reducers : {
        // for filtering result show in list
        chengeFilter : (state ,{ payload }) => {
            state.filterTodoFlag = payload
        },
        // for add todo
        addTodo : (state , actions) => {
            state.todoList.push(actions.payload)
        },
        // for delete todo
        deleteTodo : (state , { payload }) => {
            state.todoList = state.todoList.filter(item => item.id !== payload)
        },
        // for edit todo
        editTodo : (state , { payload }) => {
            state.todoList.forEach(item => {
                if(item.id === payload.id){
                    item.todo = payload.todo
                }
            });
        },
        // for chenge status todo (true / false)
        toggleTodo : (state , { payload }) => {
            state.todoList.forEach(item => {
                if(item.id === payload){
                    item.status = ! item.status
                }
            });
        }
    }
});

export const { addTodo , deleteTodo , toggleTodo , editTodo , chengeFilter } = todoSlice.actions;
export default todoSlice.reducer;