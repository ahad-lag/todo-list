
export default function Form({ chengeInputHandler , addTodoHandler , todo }) {
    return(
        <form onSubmit={addTodoHandler}>
            <div className="flex items-center">
                <input
                    type="text"
                    name="todo"
                    onChange={chengeInputHandler}
                    value={todo.todo}
                    placeholder="متن خود را وارد کنید"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 hover:bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm sm:w-auto mr-3"
                >
                    درج
                </button>
            </div>
        </form>
    )
}