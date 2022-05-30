import React from "react";
import Posts from "./Posts";
import {  useParams } from "react-router-dom";
import {  useSelector } from "react-redux";

const PostsContainer = () => {

  let params = useParams();

  const postsList = useSelector((state) => {
    return state.postsList;
  });


  const findPosts = [];
  postsList.forEach((element) => {
    if (element.userId === Number(params.id)) {
      findPosts.push(element);
    }
  });

  return <Posts findPosts={findPosts} userId={params.id} />;
};
export default PostsContainer;
