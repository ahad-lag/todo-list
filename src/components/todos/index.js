import Header from "./layout/header"
import InsertTodo from "./InsertTodo/insertTodo"
import TodoListBox from "./todoList/todoListBox"
import Modal from "../modal/modal";
import {useState} from "react";

export default function Todos() {

    const [ showModal , setShowModal ] = useState(true);

    return(
        <div className="min-h-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
            
            {/* import header */}
            <Header />

            {/* import header */}
            <InsertTodo />

            {/* import Todo list box */}
            <TodoListBox />

            {/* import modal */}
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
            >
                <h1>ahad lag</h1>
            </Modal>

        </div>
    )
}