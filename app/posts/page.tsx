import { Fira_Code } from "next/font/google";
import Link from "next/link";
// import { useEffect } from "react";
import { notFound } from "next/navigation";
import NotFound from "./not-found";

// const font = Fira_Code({
//   weight: "400",
//   subsets: ["latin"],
// });

const getPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/posts",
    {
      next: { revalidate: 100 },
    }
  );
  const posts = await res.json();
  return posts;
};

export default async function Posts() {
  const posts = await getPosts();

  // useEffect(async () => {

  //   return () => {};
  // }, [getPosts, posts]);

  if (!posts.length) {
    return notFound();
  }

  return (
    // <div className={font.className}>
    <>
      {/* <Link href="/">HOME</Link> */}

      <div>All Posts !!!! </div>
      <div>
        {posts &&
          posts.map((post: any) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>

              <Link href={`/posts/${post.id}`}>Read More</Link>
            </div>
          ))}
      </div>
    </>
  );
}
