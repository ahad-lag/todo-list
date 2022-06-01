import CheckStatusButton from './button/checkStatusButton';
import UnCheckStatusButton from './button/unCheckStatusButton';

export default function EditItem({ todo , setEditMode }) {

    const cancelEditModeHandler = () => {
        setEditMode(false)
    }

    return(
        <tr>
            <td colSpan="4" className='py-5'>
                <form className="flex flex-row mx-auto sm:pr-7 sm:pr-2">
                    <div className='basis-5/6'>
                        <input
                            type="text"
                            name="editTodo"
                            value={todo.todo}
                            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className='basis-1/6 text-center'>
                        {/* import edit button */}
                        <UnCheckStatusButton UnCheckButtonHandler={cancelEditModeHandler} />

                        {/* import edit button */}
                        <CheckStatusButton CheckButtonHandler={cancelEditModeHandler} />
                    </div>
                </form>
            </td>
        </tr>
    )
}