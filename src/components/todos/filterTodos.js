
export default function FilterTodos() {
    return(
        <div>
            <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-700 hover:bg-sky-700 hover:text-white ml-2"
            >
                همه
            </button>
            <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-600 bg-green-100 hover:bg-green-700 hover:text-white ml-2"
            >
                انجام شده
            </button>
            <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-600 bg-rose-100 hover:bg-rose-700 hover:text-white"
            >
                انجام نشده
            </button>
        </div>
    )
}