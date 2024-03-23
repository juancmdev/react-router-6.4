import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const { posts } = useLoaderData();
  console.log(posts);
  return "Blog";
};

export default Blog;

{
  /**para hacer el consumo de la API, esto solo funciona desde react-router V6.4 */
}
export const loaderBlog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return { posts: posts }; /**Puedo colocar solo posts */
};
