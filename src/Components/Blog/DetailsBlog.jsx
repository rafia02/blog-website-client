import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const DetailsBlog = () => {
  const blog = useLoaderData();



  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value 
    const email = e.target.email.value 
    const comment = e.target.comment.value 
   
    const commentData = {
      name,
      email,
      comment,
      id: blog._id
    }


    console.log(commentData)
   
  };



  return (
    <div className="px-5 mt-5">
      <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-700 mb-4 text-justify normal-case my-5">
        {blog.content}
      </p>




<h1 className="text-center text-xl font-semibold mt-10">Post A Comment</h1>
      <form onSubmit={handleSubmit} className="mb-10">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Name:
        </label>
        <input
          type="text"
          name="name"
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          name="email"
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Comment:
        </label>
        <textarea
          type="text"
          className="mt-1 p-2 border rounded-md w-full"
          name="comment"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Add Comment
      </button>
    </form>




    </div>
  );
};

export default DetailsBlog;
