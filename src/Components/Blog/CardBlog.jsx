import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const CardBlog = ({
  blog,
  refetch,
  setModalOpen,
  setData,
  favorites,
  setFavorites,
  toggleFavorite,
}) => {
  const handleDelete = (id) => {
    fetch(`https://blog-server-lac-zeta.vercel.app/blog/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("successfully Delete");
        refetch();
      })
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <div className=" mt-4 p-6 bg-white rounded-md shadow-md">
        <div className="flex mt-5 justify-between items-center mb-2">
          {blog?.title?.length > 25 ? (
            <h1 className="text-xl font-bold">
              {blog?.title?.slice(0, 25)}...
            </h1>
          ) : (
            <p className="text-xl font-bold">{blog?.title}</p>
          )}

          <p
            onClick={() => toggleFavorite(blog._id, blog)}
            className={`text-xl  ${
              favorites.includes(blog._id) ? "text-red-500" : "text-gray-600"
            }`}
          >
            <MdFavorite />
          </p>
        </div>

        {blog?.content?.length > 150 ? (
          <p className="text-gray-700 mb-4 text-justify normal-case my-5">
            {blog?.content?.slice(0, 150)}
          </p>
        ) : (
          <p className="text-gray-700 mb-4 text-justify normal-case my-5">
            {blog?.content}
          </p>
        )}
        <div className="flex mt-5 items-center justify-between">
          <Link to={`/blog/${blog._id}`}>
            <button className="text-sm border-2 hover:bg-blue-600 hover:text-white font-semibold duration-300 ease-linear hover:scale-x-105 hover:border-blue-700 rounded-2xl text-center px-3 py-[2px] border-gray-700">
              Read More
            </button>
          </Link>

          <button
            onClick={() => setModalOpen(true, setData(blog))}
            className="text-sm border-2 hover:bg-blue-600 hover:text-white font-semibold duration-300 ease-linear hover:scale-x-105 hover:border-blue-700 rounded-2xl text-center px-3 py-[2px] border-gray-700"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(blog._id)}
            className="text-sm border-2 hover:bg-rose-600 hover:text-white font-semibold duration-300 ease-linear hover:scale-x-105 hover:border-rose-700 rounded-2xl text-center px-3 py-[2px] border-gray-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
