import Header from "./layout/header"
import InsertTodo from "./InsertTodo/insertTodo"
import TodoListBox from "./todoList/todoListBox"

export default function Todos() {

    return(
        <div className="min-h-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
            
            {/* import header */}
            <Header />

            {/* import header */}
            <InsertTodo />

            {/* import Todo list box */}
            <TodoListBox />
        </div>
    )
}