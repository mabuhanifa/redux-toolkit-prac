import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/postSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const { loading, todo, error } = useSelector((state) => state.todo);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  
  return <div>

    {
        todo.map(post =>(<h1> {post.title }</h1>))
    }
  </div>;
};

export default Todos;
