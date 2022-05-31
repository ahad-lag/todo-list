import { useDispatch } from 'react-redux';
import { deleteTodo , toggleTodo } from '../../../../store/slices/todoSlice';
import StatusBadgeDone from './badge/statusBadgeDone';
import StatusBadgeUndone from './badge/statusBadgeUndone';
import DeleteButton from './button/deleteButton';
import EditButton from './button/editButton';
import CheckStatusButton from './button/checkStatusButton';
import UnCheckStatusButton from './button/unCheckStatusButton';

export default function TodoListItem({ index , todo }) {

    const dispatch = useDispatch();

    const deleteTodoHandler = () => {
        dispatch(deleteTodo(todo.id));
    }

    const toggleTodoHandler = () => {
        dispatch(toggleTodo(todo.id));
    }

    return(
        <tr key={todo.id}>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                <div className="text-gray-900 mr-1">{index}</div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                <div className="text-gray-900">{todo.todo}</div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                {
                    todo.status
                        ? <StatusBadgeDone />
                        : <StatusBadgeUndone />
                }
            </td>
            <td className="relative whitespace-nowrap py-4 px-3 text-center text-sm font-medium">
                {/* import check status buttons */}
                {
                    todo.status
                        ? <UnCheckStatusButton toggleTodoHandler={toggleTodoHandler} />
                        : <CheckStatusButton toggleTodoHandler={toggleTodoHandler} />
                }
                
                {/* import edit button */}
                <EditButton deleteTodoHandler={deleteTodoHandler} />

                {/* import delete button */}
                <DeleteButton deleteTodoHandler={deleteTodoHandler} />
            </td>
        </tr>
    )
}