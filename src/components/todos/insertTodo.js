import React , { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from './../../store/slices/todoSlice';
import Form from './form'

export default function InsertTodo() {

    // create dispatch
    const dispatch = useDispatch();

    // insert state
    const [ todo , setTodo ] = useState({
        todo : '',
        status : false
    })

    // insert handlers
    const chengeInputHandler = (e) => {
        setTodo({
            ...todo,
            [e.target.name] : e.target.value
        })
    }

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo({
            todo : '',
            status : false
        });
    }

    return(
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
            <div className="w-full bg-white py-4 px-3 shadow sm:rounded-lg sm:px-4 text-center">
                <Form
                    chengeInputHandler={chengeInputHandler}
                    addTodoHandler={addTodoHandler}
                    todo={todo}
                />
            </div>
        </div>
    )
}