
const people = [
    {
      row: '1',
      title: 'نوشتن برنامه todo',
      todoStatus: 'انجام نشده'
    },
    {
    row: '2',
    title: 'خوابیدن',
    todoStatus: 'اوکی'
    },
    // More people...
  ]

export default function Todos() {

    return(
        <div className="min-h-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-xl">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">لیست کارها</h2>
            </div>

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

            <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-xl">
                <div className="w-full bg-white py-4 px-3 shadow sm:rounded-lg sm:px-6 text-center">

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

                    {/* import list */}

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
                                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                    <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                            {people.map((person) => (
                                                <tr key={person.email}>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                                                        <div className="text-gray-900 mr-1">{person.row}</div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                                                        <div className="text-gray-900">{person.title}</div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                                                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                        {person.todoStatus}
                                                        </span>
                                                    </td>
                                                    <td className="relative whitespace-nowrap py-4 px-3 text-center text-sm font-medium">
                                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}