import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./redux/todoSlice";

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { loading, posts, error } = useSelector((state) => state.posts);
  console.log(posts, error);
  return (
    <div>
      {posts.map((post) => (
        <h2>{post.title}</h2>
      ))}
    </div>
  );
};

export default Posts;
