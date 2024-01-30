import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import SingleBlog from "../Home/SingleBlog";
import CardBlog from "./CardBlog";
import Modal from "./Modal";
import toast from "react-hot-toast";

const AllBlogs = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({});
  const {
    data: blogs = [],
    refetch,
    isloader,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/blogs`);
      const data = await res.json();
      return data;
    },
  });

  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");


  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(updatedTitle)
    console.log(updatedContent)



    const UpdateblogData = {
      title: updatedTitle,
      content: updatedContent

  }


  if(updatedContent && updatedTitle){
    fetch(`http://localhost:5000/blogUpdate/${data?._id}`, {
      method: "PATCH",
      headers: {
          "content-type": "application/json"
      },
      body: JSON.stringify(updatedContent)
  })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          toast.success("successfully complited")
          refetch()
          setModalOpen(false)
      })
      .catch(e => console.error(e))



  }
  






  };

  return (
    <div className="px-5">
      <h1 className="text-3xl text-center mt-5 mb-10 font-semibold uppercase">
        All Blog Lists
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.map((b) => (
          <CardBlog
            isModalOpen={isModalOpen}
            setModalOpen={setModalOpen}
            key={b._id}
            blog={b}
            setData={setData}
          ></CardBlog>
        ))}
      </div>

      <Modal
        setModalOpen={setModalOpen}
        isModalOpen={isModalOpen}
        updatedTitle={updatedTitle}
        setUpdatedTitle={setUpdatedTitle}
        updatedContent={updatedContent}
        setUpdatedContent={setUpdatedContent}
        handleUpdate={handleUpdate}
        setData={setData}
      ></Modal>
    </div>
  );
};

export default AllBlogs;
