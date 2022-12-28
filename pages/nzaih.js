import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
  const API_URL = "http://localhost:5000/experiences";
  const request = await fetch(API_URL);
  const posts = await request.json();
  return { props: { posts } };
};

//route
export default function Nzai({ posts }) {
  return (
    <div>
      <main>
        {posts.map((post) => (
          <h3 key={posts.id}> {post.desc}</h3>
        ))}
      </main>
    </div>
  );
}
