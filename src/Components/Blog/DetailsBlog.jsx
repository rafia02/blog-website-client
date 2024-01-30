import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsBlog = () => {
  const blog = useLoaderData();
  console.log(blog);
  return (
    <div className="px-5 mt-5">
      <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-700 mb-4 text-justify normal-case my-5">
        {blog.content}
      </p>
    </div>
  );
};

export default DetailsBlog;
