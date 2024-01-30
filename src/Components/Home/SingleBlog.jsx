import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  return (
    <div className="max-w-md mx-auto border mt-4 p-6 bg-white rounded-md shadow-md">
       {blog?.title?.length > 30 ? (
            <h1 className="text-xl font-bold">
              {blog?.title?.slice(0, 30)}...
            </h1>
          ) : (
            <p className="text-xl font-bold">{blog?.title}</p>
          )}

      {blog.content.length > 150 ? (
        <p className="text-gray-700 mb-4 text-justify normal-case my-5">
          {blog.content.slice(0, 150)}
        </p>
      ) : (
        <p className="text-gray-700 mb-4 text-justify normal-case my-5">
          {blog.content}
        </p>
      )}
      <div className="flex mt-5 items-center justify-between">
        <p className="text-sm text-gray-500 normal-case">{`Author: ${blog.author}`}</p>
        <Link to={`/blog/${blog._id}`}>
          <button className="text-sm border-2 hover:bg-blue-600 hover:text-white font-semibold duration-300 ease-linear hover:scale-x-105 hover:border-blue-700 rounded-2xl text-center px-3 py-[2px] border-gray-700">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleBlog;


 

