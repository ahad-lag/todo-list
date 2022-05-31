import { useDispatch } from 'react-redux';
import { deleteTodo , toggleTodo } from '../../../../store/slices/todoSlice';
import StatusBadgeDone from './statusBadgeDone';
import StatusBadgeUndone from './statusBadgeUndone';

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
            
                {
                    todo.status
                        ? <button
                            type="button"
                            onClick={toggleTodoHandler}
                            className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 ml-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        : <button
                            type="button"
                            onClick={toggleTodoHandler}
                            className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ml-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </button>
                }
                <button
                    type="button"
                    className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 ml-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={deleteTodoHandler}
                    className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </td>
        </tr>
    )
}