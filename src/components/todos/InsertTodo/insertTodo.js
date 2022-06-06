import React , { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from '../../../store/slices/todoSlice';
import Form from './form'
import ValidateModal from "../../modal/validateModal";
import { AlertToast } from "../../toast/toastMain";

export default function InsertTodo() {

    // create dispatch
    const dispatch = useDispatch();

    // insert state
    const [ showModal , setShowModal ] = useState(false);
    const [ todo , setTodo ] = useState({
        id : Date.now(),
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
        if(todo.todo){
            dispatch(addTodo(todo));
            AlertToast('با موفقیت اضافه شد')
            setTodo({
                id : Date.now(),
                todo : '',
                status : false
            });
        }else{
            setShowModal(true);
        }
    }

    return(
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
            <ValidateModal
                showModal={showModal}
                setShowModal={setShowModal}
            />
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