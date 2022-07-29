import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomTodo } from "./redux/customtodoSlice";
;

const Todos = () => {
  const dispatch = useDispatch();
  const { loading, todo, error } = useSelector((state) => state.customtodo);

  dispatch(fetchCustomTodo());

  return (
    <div>
      {todo.map((post) => (
        <h1> {post.title}</h1>
      ))}
    </div>
  );
};

export default Todos;
