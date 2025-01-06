import React, { useState, useContext } from "react";
import Layout from "../outlet/Layout";
import { Link } from "react-router-dom";
import ContextApp from "../context/ContextApp";



const Allblogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { blogData } = useContext(ContextApp);
  console.log(searchTerm);

  // console.log(blogData);

  const Blogs = blogData;
  console.log(Blogs);

  // Filter blogs based on the search term
  const filteredBlogs =
    Blogs?.filter((blog) =>
      blog?.blog_category
        ?.toLowerCase()
        .includes(searchTerm?.toLowerCase() || "")
    ) || [];

  // Popular category blog
  const popularBlog = Blogs.filter(
    (blog) => blog.blog_category.toLowerCase() === "popular"
  );
  // console.log(popularBlog);

  return (
    <Layout>
      {/* Search Input */}
      <div className="flex justify-center mt-10 m-6">
        <input
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search blogs . . . ."
          className="w-[400px] h-[40px] rounded-xl p-2 border border-gray-300"
        />
      </div>

      <div className=" mx-auto px-4 mt-10 mb-10">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-12 md:mt-20 md:mb-20">
          {/* Left */}
          {/** Display blogs dynamically based on the search term */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 rounded w-full lg:w-[900px] gap-6">
            {(searchTerm ? filteredBlogs : Blogs).map((blog) => (
              <div
                key={blog.id}
                className="bg-white flex flex-col items-start gap-4 p-4 rounded-lg shadow-lg  group transform transition duration-300 ease-in-out hover:-translate-y-3"
              >
                {/* Image */}
                <div className="img w-full h-[200px] flex justify-center items-center">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={blog.blog_img}
                    alt={blog.blog_title}
                  />
                </div>
                {/* Text Content */}
                <div className="flex-1 w-full">
                  <h2 className="text-indigo-600 font-bold uppercase text-sm mb-2">
                    {blog.blog_category}
                  </h2>
                  <h4 className="font-semibold text-lg mb-2">
                    {blog.blog_title}
                  </h4>
                  <p className="text-gray-600 mb-2">{blog.desc}</p>
                  <p className="text-sm text-gray-500 mb-1">
                    {blog.blog_author}
                  </p>
                  <p className="text-xs text-gray-400">{blog.blog_post_date}</p>
                </div>
                <div className="flex justify-center items-center float-right">
                  <Link to={`/singlepage/${blog.id}`}>
                    <button className="bg-indigo-700 text-white p-2 px-5 rounded">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Popular Blogs */}
          <div className=" mt-5 ">
            <h1 className="text-xl font-semibold mb-4">Popular Blogs</h1>
            {popularBlog.map((pop) => (
              <div
                key={pop.id}
                className="p-2 bg-white rounded-xl flex items-start gap-4 mb-4"
              >
                {/* Blog Image */}
                <Link to={`/singlepage/${pop.id}`}>
                  {" "}
                  <img
                    className="h-[80px] w-[90px] rounded-xl object-cover"
                    src={pop.blog_img}
                    alt="Related Blog"
                  />
                </Link>
                {/* Blog Details */}
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-indigo-600">
                    {pop.category}
                  </h3>
                  <p className="font-medium text-gray-800 text-sm mb-1">
                    {pop.title}
                  </p>
                  <p className="text-gray-600 text-xs">{pop.author}</p>
                  <p className="text-gray-400 text-xs">{pop.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Allblogs;
