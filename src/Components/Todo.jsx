import { useState } from "react";
import "../Styles/Todo.css";
import GlobalFooter from "./Footer";

const Todo = () => {
    const [newTodo, setNewTodo] = useState();

  const [todos, setTodos] = useState([
    {
      idx: 1,
      todo: "자음 발음하기",
      isCheck: true,
    },
    {
      idx: 2,
      todo: "애국가 읽어보기",
      isCheck: false,
    },
  ]);
    
    const changeTodo = ({ target }) => {
        const { value } = target;
        setNewTodo(value);
    }

  return (
    <div className="todo_wrap">
      <div className="todo_container">
        <input type="text" className="todo_input" placeholder="발음공부 계획 추가하기"/>
        <div className="todo_box">
          {todos.map((todo) => (
            <div className="todo" key={todo.idx}>
              <div></div>
              <p>{todo.todo}</p>
              <input type="checkbox" checked={todo.isCheck} className="todo-check"/>
            </div>
          ))}
        </div>
        <GlobalFooter />
      </div>
    </div>
  );
};

export default Todo;
