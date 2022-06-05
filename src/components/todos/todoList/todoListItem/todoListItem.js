import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo , toggleTodo } from '../../../../store/slices/todoSlice';
import Item from './item';
import EditItem from './editItem';
import DeleteModal from "../../../modal/deleteModal";

export default function TodoListItem({ index , todo }) {

    const [ editMode , setEditMode ] = useState(false);
    const [ showModal , setShowModal ] = useState(false);

    const dispatch = useDispatch();

    const deleteTodoHandler = () => {
        dispatch(deleteTodo(todo.id));
        setShowModal(false)
    }

    const toggleTodoHandler = () => {
        dispatch(toggleTodo(todo.id));
    }
    
    return(
        <>
            {
                !editMode
                ? <Item
                    toggleTodoHandler={toggleTodoHandler}
                    index={index}
                    todo={todo}
                    setEditMode={setEditMode}
                    setShowModal={setShowModal}
                />
                : <EditItem
                    todo={todo}
                    setEditMode={setEditMode}
                />
            }

            {/* import delete modal */}
            <DeleteModal
                showModal={showModal}
                setShowModal={setShowModal}
                deleteTodoHandler={deleteTodoHandler}
            />

        </>
    )
}