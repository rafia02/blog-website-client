import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
import AddBlog from "./Components/Blog/AddBlog";
import { Toaster } from "react-hot-toast";
import AllBlogs from "./Components/Blog/AllBlogs";
import DetailsBlog from "./Components/Blog/DetailsBlog";
import Favourite from "./Components/Favourite/Favourite";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (postId, fav) => {
    console.log(postId);
    console.log(fav);
    console.log(favorites);
    const updatedFavorites = favorites.includes(postId)
      ? favorites.filter((id) => id !== postId)
      : [...favorites, postId];

    setFavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "/", element: <Home></Home> },
        {
          path: "/blogs",
          element: (
            <AllBlogs
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              setFavorites={setFavorites}
            ></AllBlogs>
          ),
        },
        { path: "/add-blog", element: <AddBlog></AddBlog> },
        {
          path: "blog/:id",
          loader: ({ params }) =>
            fetch(`https://blog-server-lac-zeta.vercel.app/blog/${params.id}`),
          element: <DetailsBlog></DetailsBlog>,
        },
        { path: "/favrite", element: <Favourite></Favourite> },
      ],
    },
  ]);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
};

export default App;
