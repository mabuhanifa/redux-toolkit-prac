import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./redux/postSlice";

const Todos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const { isLoading, todos, error } = useSelector((state) => state.todo);
  console.log(isLoading, todos, error);
  return <div>todos</div>;
};

export default Todos;
