import React, { useEffect, useMemo, useState } from "react";
import TodoList from "../../components/TodoList";
import { useLocation, useNavigate, useMatch } from "react-router-dom";
import queryString from "query-string";
import TodoForm from "../../components/TodoForm";
function ListPage(props) {
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
    const location = useLocation();
    const match = useMatch("/todos");
    const navigate = useNavigate();
    const [todoList, settodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || "all";
    });
    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || "all");
    }, [location.search]);

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
        const queryParams = { status: "all" };
        navigate({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    };
    const handleShowCompletedClick = () => {
        const queryParams = { status: "completed" };
        navigate({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    };
    const handleShowNewClick = () => {
        const queryParams = { status: "new" };
        navigate({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    };

    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => filterStatus === "all" || filterStatus === todo.status);
    }, [todoList, filterStatus]);

    const handeTodoFormSubmit = (values) => {
      const newTodo = {
        id: todoList.length + 1,
        title: values.title,
        status: "new",
      };
      const newTodoList = [...todoList, newTodo];
      settodoList(newTodoList);
    };
    return (
      <div>
        <h3>what to do</h3>
        <TodoForm onsubmit={handeTodoFormSubmit} />

        <h3>Todo Feature</h3>
        <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
        <div>
          <button onClick={handleShowAllClick}>Show All</button>
          <button onClick={handleShowCompletedClick}>Show Completed</button>
          <button onClick={handleShowNewClick}>Show New</button>
        </div>
      </div>
    );
}

export default ListPage;