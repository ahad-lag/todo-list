
export default function InsertBox() {
    return(
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
            <div className="w-full bg-white py-4 px-3 shadow sm:rounded-lg sm:px-6 text-center">
                <form>
                    <div className="flex items-center">
                        <input
                            type="text"
                            name="todo"
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
            </div>
        </div>
    )
}