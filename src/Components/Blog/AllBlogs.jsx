import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import SingleBlog from "../Home/SingleBlog";
import CardBlog from "./CardBlog";
import Modal from "./Modal";
import toast from "react-hot-toast";

const AllBlogs = ({favorites, setFavorites, toggleFavorite}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");
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




  const handleUpdate = (e) => {
    e.preventDefault();

    if (updatedContent && updatedTitle) {
      console.log("hobe");
      console.log(data._id);
      fetch(`http://localhost:5000/blogUpdate/${data?._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title: updatedTitle, content: updatedContent }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("successfully complited");
          refetch();
          setModalOpen(false);
        })
        .catch((e) => console.error(e));
    }
  };

  

  return (
    <div className="px-5 mb-20">
      <h1 className="text-3xl text-center mt-5 mb-10 font-semibold uppercase">
        All Blog Lists
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.map((b) => (
          <CardBlog
            setModalOpen={setModalOpen}
            key={b._id}
            blog={b}
            setData={setData}
            refetch={refetch}
            favorites={favorites} 
            setFavorites ={setFavorites}
            toggleFavorite={toggleFavorite}
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
