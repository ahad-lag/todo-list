import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../../../store/slices/todoSlice';
import { AlertToast } from '../../../toast/toastMain';
import CheckStatusButton from './button/checkStatusButton';
import UnCheckStatusButton from './button/unCheckStatusButton';

export default function EditItem({ todo , setEditMode , setShowValidateModal }) {

    const dispatch = useDispatch();

    const [ editText , setEditText ] = useState(todo);

    // create handlers
    const editTodoHandler = (e) => {
        e.preventDefault();
        if(editText.todo){
            dispatch(editTodo(editText));
            AlertToast('با موفقیت ویرایش شد');
            setEditMode(false);
        }else{
            setShowValidateModal(true)
        }
    }

    const cancelEditModeHandler = () => setEditMode(false)

    const chengeEditTodoText = (e) => {
        setEditText({
            ...editText,
            [e.target.name] : e.target.value
        });
    }

    return(
        <tr>
            <td colSpan="4" className='py-5'>
                <form className="flex flex-row mx-auto sm:pr-7 sm:pr-2" onSubmit={editTodoHandler}>
                    <div className='basis-5/6'>
                        <input
                            type="text"
                            name="todo"
                            value={editText.todo}
                            onChange={chengeEditTodoText}
                            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className='basis-1/6 text-center'>
                        {/* import edit button */}
                        <UnCheckStatusButton UnCheckButtonHandler={cancelEditModeHandler} />

                        {/* import edit button */}
                        <CheckStatusButton CheckButtonHandler={editTodoHandler} />
                    </div>
                </form>
            </td>
        </tr>
    )
}