import { useSelector } from 'react-redux';
import TodoListItem from './todoListItem';
import EmptyListItem from './emptyListItem';

export default function TodoList() {

    // create selector
    const todos = useSelector(state => state.todo.todoList);

    return(
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-4 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle px-1">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                        ردیف
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                        تیتر
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                        وضعیت
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                        تنظیمات
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">

                                    {/* import todo list item (tr) */}
                                    {
                                        todos.length
                                            ? todos.map(( todo , index ) => <TodoListItem index={index + 1} todo={todo} />)
                                            : <EmptyListItem />
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}