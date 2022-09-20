import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogdata } from "./blogData.js";

function BlogPost() {
  const navigate =  useNavigate();
  const { slug } = useParams();

  const blogpost = blogdata.find((post) => post.slug === slug);
  const returnToBlog = () => {
    navigate('/blog');
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Regresar</button>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>
    </>
  );
}

export { BlogPost };
