import React, { use, useState } from "react";
import TodoList from "./components/TodoList";

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: "Eat",
            status: "new",
        },
        {
            id: 2,
            title: "Sleep",
            status: "completed",
        },
        {
            id: 3,
            title: "Code",
            status: "new",
        },
    ];
    const [todoList, settodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState("all");
    const handleTodoClick = (todo, idx) => {
        // clone current array to the new one
        const newTodoList = [...todoList];
        // toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === "new" ? "completed" : "new",
        };
        // update todo list
        settodoList(newTodoList);
    };
    const handleShowAllClick = () => {
        setFilterStatus("all");
    };
    const handleShowCompletedClick = () => {
        setFilterStatus("completed");
    };
    const handleShowNewClick = () => {
        setFilterStatus("new");
    };

    const renderedTodoList = todoList.filter(todo => filterStatus === "all" || filterStatus === todo.status);

    return (
        <div>
            <h1>Todo Feature</h1>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;