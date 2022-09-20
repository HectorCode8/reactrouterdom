import React from "react";
import { Link } from 'react-router-dom';

function BlogPage() {
  return (
    <>
      <h1>BlogPage</h1>
      <ul>
      {blogdata.map(post => (
        <BlogLink post={post} />
      ))}
      </ul>
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

const blogdata = [];
blogdata.push({
  title: 'Que es REACT',
  slug: 'que-es-react',
  content: 'React es el mejor Framework',
  author: 'Hector Haro Hermosillo'
});
blogdata.push({
  title: 'Que es VUE',
  slug: 'que-es-vue',
  content: 'VUE es el mejor Framework',
  author: 'Hector Haro Hermosillo'
});
blogdata.push({
  title: 'Que es ANGULAR',
  slug: 'que-es-angular',
  content: 'ANGULAR es el mejor Framework',
  author: 'Hector Haro Hermosillo'
});

export { BlogPage };