import React from "react";
import { Link, useParams, Outlet } from "react-router-dom";
 
// IGNORE THSI PAGE < WILL DISCUSS I NEXT LECTURE>

const BlogPosts = {
  1: {
    title: "First Blog Post",
    description: "Lorem ipsum dolor sit amet, consectetur adip.",
  },
  2: {
    title: "Second Blog Post",
    description: "Hello React Router v6",
  },
};
export const Posts = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <ul>
        {Object.entries(BlogPosts).map(([slug, { title }]) => (
          <li key={slug}>
            <Link to={`/posts/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};



export const PostLists = () => {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug}>
          <Link to={`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};



export function Post() {
  const { slug } = useParams();
  const post = BlogPosts[slug];
  const { title, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
