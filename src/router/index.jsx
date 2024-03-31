import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog, { loaderBlog } from "../pages/Blog";
import Post, { loaderPost } from "../pages/Post";
import Notfound from "../pages/Notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Notfound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/blog",
        element: <Blog />,
        loader:
          loaderBlog /**Este es el loaderblog que se exportó desde el blog */,
      },
      {
        path: "/blog/:id",
        element: <Post />,
        loader: loaderPost,
      },
    ],
  },
]);
