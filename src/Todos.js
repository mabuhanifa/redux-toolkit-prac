import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./redux/postSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  
  console.log(isLoading, posts, error);
  return <div>

    {
        posts.map(post =>(<h1> {post.title }</h1>))
    }
  </div>;
};

export default Todos;
