import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const CardBlog = ({ blog, refetch, setModalOpen, setData, favorites, setFavorites, toggleFavorite }) => {
 
    // const [favorites, setFavorites] = useState([]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/blog/${id}`, {
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
  }






//   useEffect(() => {


//     // Load favorites from local storage
//     const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(storedFavorites);

//     console.log(favorites)
//   }, []);


  

//   const toggleFavorite = (postId, fav) => {
//     console.log(postId)
//     console.log(fav)
//     console.log(favorites)
//     const updatedFavorites = favorites.includes(postId)
//       ? favorites.filter((id) => id !== postId)
//       : [...favorites, postId];

//     setFavorites(updatedFavorites);

//     // Save favorites to local storage
//     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//   };

  








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

          <p  onClick={() => toggleFavorite(blog._id, blog)} className={`text-xl  ${
              favorites.includes(blog._id) ? 'text-red-500' : 'text-gray-600'
            }`}>
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
          {/* <p className="text-sm text-gray-500 normal-case">{`Author: ${blog.author}`}</p> */}

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
