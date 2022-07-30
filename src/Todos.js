import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newSuccess } from "./redux/store/newSlice";
const Todos = () => {
  const dispatch = useDispatch();
  const {todo} = useSelector((state) => state.newtodos);
  console.log(todo);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      dispatch(newSuccess(res.data));
    };
    fetch();

    
  }, [dispatch]);
  return (
    <div>
      {todo.map((post) => (
        <h1> {post.title}</h1>
      ))}
    </div>
  );
};

export default Todos;
