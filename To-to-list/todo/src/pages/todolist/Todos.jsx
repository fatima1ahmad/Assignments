import { useState } from "react";
import Todo from "./components/Todo";
import NewTodo from "./components/NewTodo";

function Todos() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Study",
      description: "Learn about components and props",
    },
    {
      id: 2,
      title: "Do Homework",
      description: "Complete the math assignment",
    },
  ]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };
  const listOfdotos = todos.map((item, index) => (
    <Todo key={index} data={item} />
  ));
  return (
    <div className="todos">
      <NewTodo onAddTodo={handleAddTodo} />
      <div className="todos_list card">{listOfdotos}</div>
    </div>
  );
}

export default Todos;
