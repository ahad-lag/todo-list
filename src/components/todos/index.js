import Header from "./header"
import InsertBox from "./insertBox"
import TodoListBox from "./todoListBox"

export default function Todos() {

    return(
        <div className="min-h-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
            
            {/* import header */}
            <Header />

            {/* import header */}
            <InsertBox />

            {/* import Todo list box */}
            <TodoListBox />
        </div>
    )
}