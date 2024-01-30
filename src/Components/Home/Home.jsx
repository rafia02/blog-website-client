import React from "react";
import SingleBlog from "./SingleBlog";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
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

  // console.log(blogs);

  return (
    <div className="px-5 mb-20">
      <h1 className="text-3xl text-center mt-5 mb-10 font-semibold uppercase">
        Read blogs and learn more
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.map((b) => (
          <SingleBlog  key={b._id}
           blog={b}
           ></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default Home;
