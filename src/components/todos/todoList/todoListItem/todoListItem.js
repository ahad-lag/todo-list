import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo , toggleTodo } from '../../../../store/slices/todoSlice';
import Item from './item';
import EditItem from './editItem';
import DeleteModal from "../../../modal/deleteModal";
import ValidateModal from "../../../modal/validateModal";
import { AlertToast } from '../../../toast/toastMain';

export default function TodoListItem({ index , todo }) {

    const [ editMode , setEditMode ] = useState(false);
    const [ showModal , setShowModal ] = useState(false);
    const [ showValidateModal , setShowValidateModal ] = useState(false);


    const dispatch = useDispatch();

    const deleteTodoHandler = () => {
        dispatch(deleteTodo(todo.id));
        AlertToast('با موفقیت حذف شد')
        setShowModal(false)
    }

    const toggleTodoHandler = () => {
        dispatch(toggleTodo(todo.id));
        AlertToast('وضعیت با موفقیت تغییر کرد')
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
                    setShowValidateModal={setShowValidateModal}
                />
            }

            {/* import delete modal */}
            <DeleteModal
                showModal={showModal}
                setShowModal={setShowModal}
                deleteTodoHandler={deleteTodoHandler}
            />
            <ValidateModal
                showModal={showValidateModal}
                setShowModal={setShowValidateModal}
            />

        </>
    )
}