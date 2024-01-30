import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const DetailsBlog = () => {
  const blog = useLoaderData();
  const [comments, setComments] = useState([]);

  // const {
  //   data: comments = [],
  //   refetch,
  //   isloader,
  // } = useQuery({
  //   queryKey: ["blogs"],
  //   queryFn: async () => {
  //     const res = await fetch(`https://blog-server-lac-zeta.vercel.app/comments?id=${blog?._id}`);
  //     const data = await res.json();

  //     return data;

  //   },
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const comment = e.target.comment.value;

    const commentData = {
      name,
      email,
      comment,
      id: blog._id,
    };

    console.log(commentData);

    fetch(`https://blog-server-lac-zeta.vercel.app/comment`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        e.target.reset();
        toast.success("Post Add Successfully");
        window.location.reload();
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetch(`https://blog-server-lac-zeta.vercel.app/comments?id=${blog?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        forceUpdate();
      })
      .catch((e) => console.error(e));
  }, [blog?._id]);

  const handleDelete = (id) => {
    fetch(`https://blog-server-lac-zeta.vercel.app/comment/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("successfully Delete");
        window.location.reload();
      })
      .catch((e) => console.error(e));
  };

  console.log(comments);

  return (
    <div className="px-5 mt-5 mb-20">
      <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-700 mb-4 text-justify normal-case my-5">
        {blog.content}
      </p>

      <h1 className="text-center text-xl font-semibold mt-10">
        Post A Comment
      </h1>
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
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add Comment
        </button>
      </form>

      <div>
        {comments && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {comments?.map((c) => (
              <div className="mt-4 p-6 bg-blue-200  rounded-md shadow-md">
                <p>{c.comment}</p>
                <div className="flex text-xs mt-5 justify-between items-center mb-2">
                  <p>{c.name}</p>
                  <p>{c.email}</p>
                </div>

                <div className="flex text-xs mt-5 justify-between items-center ">
                  <button
                    onClick={() => handleDelete(c._id)}
                    className="text-sm border-2 hover:bg-rose-600 hover:text-white font-semibold duration-300 ease-linear hover:scale-x-105 hover:border-rose-700 rounded-2xl text-center px-3 py-[2px] border-gray-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsBlog;
