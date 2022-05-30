import FilterTodos from './filterTodos';
import TodoList from './todoList';

export default function TodoListBox () {
    return(
        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-xl">
            <div className="w-full bg-white py-4 px-3 shadow sm:rounded-lg sm:px-6 text-center">

                {/* import list */}
                <FilterTodos />

                {/* import todoList */}
                <TodoList />
                
            </div>
        </div>
    )
}