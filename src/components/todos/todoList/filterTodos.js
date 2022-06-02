import { useDispatch } from 'react-redux';
import { chengeFilter } from './../../../store/slices/todoSlice';

export default function FilterTodos() {

    const dispatch = useDispatch();

    const allFilterhandler = (e) => dispatch(chengeFilter(e.target.name))

    return(
        <div>
            <button
                type="button"
                name='all'
                onClick={allFilterhandler}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-700 hover:bg-sky-700 hover:text-white ml-2"
            >
                همه
            </button>
            <button
                type="button"
                name='do'
                onClick={allFilterhandler}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-600 bg-green-100 hover:bg-green-700 hover:text-white ml-2"
            >
                تکمیل شده
            </button>
            <button
                type="button"
                name='undo'
                onClick={allFilterhandler}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-600 bg-rose-100 hover:bg-rose-700 hover:text-white"
            >
                تکمیل نشده
            </button>
        </div>
    )
}