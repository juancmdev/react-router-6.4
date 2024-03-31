import { useLoaderData } from "react-router-dom";

const Post = () => {
  const { post } = useLoaderData();

  return (
    <>
      <h1>
        {post.id} - {post.title}
        <p>{post.body}</p>
      </h1>
    </>
  );
};

export default Post;

export const loaderPost = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return { post };
};
