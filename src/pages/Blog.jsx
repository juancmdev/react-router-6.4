import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const { posts } = useLoaderData();
  console.log(posts);
  return (
    <ul>
      {posts.length > 0 ? (
        posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))
      ) : (
        <li>No blogs found</li>
      )}
    </ul>
  );
};

export default Blog;

{
  /**para hacer el consumo de la API, esto solo funciona desde react-router V6.4 */
}
export const loaderBlog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok)
    throw {
      status: res.status,
      statusText: "Blog no encontrado",
    };

  const posts = await res.json();

  return { posts: posts }; /**Puedo colocar solo posts */
};
