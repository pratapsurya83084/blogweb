import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import ContextApp from "../context/ContextApp";

const BlogHome = () => {
  const { blogs } = useContext(ContextApp);

  // console.log(blogs);

  const [click, setClick] = useState(false);
  // const [blogs, setblogs] = useState();
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const categoryBlog = (category) => {
    if (category === "All") {
      // Show all blogs if All is selected
      setFilteredBlogs(blogs);
    } else {
      const filteredData = blogs.filter(
        (blog) => blog.blog_category?.toLowerCase() === category.toLowerCase()
      );

      setFilteredBlogs(filteredData);
    }
  };

  const togglemodeDropdown = () => {
    setClick(!click);
  };
  const [visibleBlogs, setVisibleBlogs] = useState(8); // Initially show 8 blogs

  // Function to load more blogs
  const loadMore = () => {
    setVisibleBlogs((prev) => prev + 8); // Show 8 more blogs on each click
  };
  //only popular  categories
  const popularBlogs =
    blogs &&
    blogs.filter((blogs) => blogs.blog_category.toLowerCase() == "popular");

  // console.log(popularBlogs);

  return (
    <div className="flex justify-center mt-20  mb-20">
      <div className="flex space-x-">
        {/* Left Column */}
        {/* if length > 0 then show this section else  "hidden or none " */}
        <div className=" hidden md:flex p-5 w-fit h-fit bg-white rounded">
          <div className="">
            <h1 className="text-lg font-bold">Saved Post</h1>
            images.. <br />
            <h3>title</h3>
            <p>subtittle jjhhdjj dfdfdfr</p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="bg-white rounded  mx-2 md:w-[560px] lg:w-[600px] xl:w-[890px]  ">
          <div className="">
            <ul className="flex justify-center blogs-center pt-2 xl:gap-x-10">
              <li
                className="text-xs md:text-sm cursor-pointer  px-1 pt-2  sm:px-2 md:p-2"
                onClick={() => categoryBlog("popular")}
              >
                Popular
              </li>

              <li
                className="text-xs md:text-sm cursor-pointer px-1 pt-2  sm:px-2 md:p-2"
                onClick={() => categoryBlog("lifestyle")}
              >
                Lifestyle
              </li>
              <li
                className="text-xs md:text-sm cursor-pointer  px-1 pt-2  sm:px-2 md:p-2"
                onClick={() => categoryBlog("shopping")}
              >
                Shopping
              </li>
              <li
                className="text-xs md:text-sm cursor-pointer  px-1 pt-2 sm:px-2 md:p-2"
                onClick={() => categoryBlog("technology")}
              >
                Technology
              </li>
              <li
                className="text-xs md:text-sm cursor-pointer  px-1 pt-2 sm:px-2 md:p-2"
                onClick={() => categoryBlog("sports")}
              >
                Sports
              </li>

              {/* Click on 3-dot menu */}
              <li
                onClick={togglemodeDropdown}
                className="relative flex sm:hidden p-1 cursor-pointer"
              >
                ⋮{/* Dropdown menu */}
                {click && (
                  <ul className="absolute top-8 right-0 w-32 bg-white shadow-md rounded-md">
                    <li
                      className="text-xs md:text-sm cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => categoryBlog("health")}
                    >
                      Health
                    </li>
                    <li
                      className="text-xs md:text-sm cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => categoryBlog("travel")}
                    >
                      Travel
                    </li>
                    <li
                      className="text-xs md:text-sm cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => categoryBlog("food")}
                    >
                      Food
                    </li>
                    <li
                      className="text-xs md:text-sm cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => categoryBlog("All")}
                    >
                      All
                    </li>
                  </ul>
                )}
              </li>

              {/* Hidden blogs for larger screens */}
              <li
                className="hidden sm:flex text-xs md:text-sm  pt-2 cursor-pointer px-2 md:p-2"
                onClick={() => categoryBlog("health")}
              >
                Health
              </li>
              <li
                className="hidden sm:flex text-xs md:text-sm pt-2 cursor-pointer px-2 md:p-2"
                onClick={() => categoryBlog("travel")}
              >
                Travel
              </li>
              <li
                className="hidden sm:flex text-xs md:text-sm pt-2 cursor-pointer px-2 md:p-2"
                onClick={() => categoryBlog("food")}
              >
                Food
              </li>
              <li
                className="hidden sm:flex text-xs md:text-sm  pt-2 cursor-pointer px-2 md:p-2"
                onClick={() => categoryBlog("All")}
              >
                All
              </li>
            </ul>
          </div>

          {/* show blog cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* 0 to limit state  */}
            {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
              <div
                key={blog.id}
                className="flex md:flex-row items-center bg-white rounded-lg overflow-hidden"
              >
                {/* Left Content */}
                <div className="p-6 md:w-2/3">
                  <h3 className="text-indigo-600 font-bold">
                    {blog.blog_category}
                  </h3>
                  <h5 className="text-xs md:text-sm font-bold">
                    {blog.blog_title}
                  </h5>
                  <h6 className="hidden md:flex">{blog.blog_subtitle}</h6>
                  <Link to={`/singlepage/${blog.id}`}>
                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                      <span className="text-xs md:text-sm">
                        {blog.blog_author}
                      </span>
                      <span className="text-xs md:text-sm">
                        {blog.blog_post_date}
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Right Image */}
                <div className="md:w-1/3 flex justify-end">
                  <Link to={`/singlepage/${blog.id}`}>
                    <img
                      src={blog.blog_img}
                      alt={blog.blog_title}
                      className="w-[500px] h-[130px] sm:w-[500px] sm:h-[200px] object-cover p-2"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          {visibleBlogs < filteredBlogs.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={loadMore}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                See More
              </button>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="bg-white rounded w-fit h-fit hidden lg:block p-2 shadow-md">
          <h2 className="p-2 text-lg font-semibold">Popular Posts</h2>
          <ul>
            {popularBlogs.map((blog) => (
              <li key={blog.id} className="p-2 border-b">
                <Link to={`/singlepage/${blog.id}`} className="block">
                  <img
                    src={blog.blog_img}
                    alt={blog.blog_title}
                    className="w-full h-32 object-cover rounded"
                  />
                  <p className="text-indigo-600 p-1 font-bold">
                    {blog.blog_category}
                  </p>
                </Link>
                <p className="p-1">{blog.blog_title}</p>
                <p className="text-xs text-gray-500">23 Likes</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
