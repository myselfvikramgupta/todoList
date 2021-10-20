import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TodoTitle from "./components/todo/TodoTitle";
import TodoList from "./components/todo/TodoList";
import LodingCard from "./components/loding/LodingCard";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [mapTodo, setMapTodo] = useState([]);
  const [filterList, setFilterList] = useState(todoList);
  const [isLodings, setIsLodings] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) => {
      setTodoList(res.data);
      setFilterList(res.data);
      setIsLodings(false);
    });
  }, []);
  useEffect(() => {
    isSearch ? setMapTodo(filterList) : setMapTodo(todoList);
  }, [todoList, filterList, isSearch]);
  const searchData = (e) => {
    let todoTitle = e.target.value.toLowerCase();
    let searchValue = todoList.filter((todo) =>
      todo.title.toLowerCase().includes(todoTitle)
    );
    setIsSearch(true);
    setFilterList(searchValue);
  };
  const deleteTodo = (id) => {
    let deleteValue = todoList.filter((todo) => todo.id != id);
    setTodoList(deleteValue);
    setIsSearch(false);
  };
  return (
    <>
      <div className="container">
        <div className="todo">
          <TodoTitle handleSearch={searchData} />
          {isLodings ? (
            <LodingCard />
          ) : (
            <TodoList todoList={mapTodo} handleDelete={deleteTodo} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
