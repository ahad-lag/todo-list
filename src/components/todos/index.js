import Header from "./header"
import InsertBox from "./insertBox"

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
            
            {/* import header */}
            <Header />

            {/* import header */}
            <InsertBox />

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
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ml-2"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                            </svg> */}
                                                        </button>
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
                                                            className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
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