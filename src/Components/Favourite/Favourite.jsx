import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleBlog from "../Home/SingleBlog";

const Favourite = () => {
  const favriteId = JSON.parse(localStorage.getItem("favorites"));
  console.log(favriteId);

  const {
    data: blogs = [],
    refetch,
    isloader,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch(`https://blog-server-lac-zeta.vercel.app/blogs`);
      const data = await res.json();
      return data;
    },
  });

  const fvratDatas = blogs.filter((blg) => favriteId.includes(blg._id));

  return (
    <div className="px-5 mb-20">
      <h1 className="text-3xl text-center mt-5 mb-10 font-semibold uppercase">
        My favourite Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {fvratDatas.map((b) => (
          <SingleBlog key={b._id} blog={b}></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
