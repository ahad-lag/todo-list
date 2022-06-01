import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo , toggleTodo } from '../../../../store/slices/todoSlice';
import Item from './item';
import EditItem from './editItem';

export default function TodoListItem({ index , todo }) {

    const [ editMode , setEditMode ] = useState(false);

    const dispatch = useDispatch();

    const deleteTodoHandler = () => {
        dispatch(deleteTodo(todo.id));
    }

    const toggleTodoHandler = () => {
        dispatch(toggleTodo(todo.id));
    }

    return(
        ! editMode
            ? <Item 
                deleteTodoHandler={deleteTodoHandler}
                toggleTodoHandler={toggleTodoHandler}
                index={index}
                todo={todo}
                setEditMode={setEditMode}
            />
            : <EditItem 
                todo={todo} 
                setEditMode={setEditMode}
            />
    )
}