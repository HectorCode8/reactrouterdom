import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogdata } from "./blogData.js";
import { useAuth } from "./auth.js";

function BlogPost() {
  const navigate =  useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;
  const returnToBlog = () => {
    navigate(-1);
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Regresar</button>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>

      {canDelete && (
        <button>Eliminar Blogpost</button>
      )}
    </>
  );
}

export { BlogPost };
