import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import  ContextApp from '../context/ContextApp';

const BlogHome = () => {
  const {blogs}=useContext(ContextApp);

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


 
 //only popular  categories
const popularBlogs =
blogs &&
blogs.filter((blogs) => blogs.blog_category.toLowerCase() == "popular");

  // console.log(popularBlogs);

  return (
    <div className="flex justify-center mt-20  mb-20">
     
      <div className="flex md:space-x-4">
        
        {/* Left Column */}
        {/* <div className=" hidden md:block w-[150px] h-[330px] bg-white rounded">
          <ul className="">
            <li className="p-2 ">About Us</li>{" "}
            <li className="p-2 ">Advertise with us</li>
            <li className="p-2 ">Safety Tips</li>
            <li className="p-2 ">FAQs</li>
            <li className="p-2 ">Blogs</li>
            <li className="p-2 ">Terms & Condition</li>
            <li className="p-2 ">Privacy Privacy</li>
            <li className="p-2 ">Contact Us</li>
          </ul>
        </div> */}

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
                ⋮
                {/* Dropdown menu */}
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
          <div className="grid grid-cols- gap-6">
            {filteredBlogs &&
              filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="flex md:flex-row blogs-center bg-white  rounded-lg overflow-hidden"
                >
                  {/* Left Content */}

                  <div className="p-6 md:w-2/3">
                    <h3 className="text-indigo-600 font-bold">
                      {blog.blog_category}
                    </h3>
                    <h5 className="text-xs md:text-sm font-bold ">
                      {blog.blog_title}
                    </h5>

                    <Link to={`/singlepage/${blog.id}`}>
                      {/* <p className="text-xs md:text-sm text-gray-700 mt-4 ">
                      {blog.desc}
                    </p> */}
                      <div className=" blogs-center gap-4 mt-4 text-sm text-gray-500">
                        <span className="text-xs md:text-sm">
                          {blog.blog_author}
                        </span>{" "}
                        <br />
                        <span className="text-xs md:text-sm">
                          {blog.blog_post_date}
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Right Image */}

                  <div className=" md:w-1/3 flex justify-end ">
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
        </div>

        {/* Right Column */}
        <div className=" bg-white rounded  w-[280px] h-[300px]    hidden lg:block  ">
          {popularBlogs &&
            popularBlogs.map((blogs) => {
              return (
                <div key={blogs.id}>
                  <h2 className="p-2">Popular Posts</h2>
                  <ul className=" p-2">
                  <Link to={`/singlepage/${blogs.id}`}>
                    <img src={blogs.blog_img} alt="" />
                    <p className="text-indigo-600 p-2 font-bold">
                      {blogs.blog_category}
                    </p>
                    </Link>
                    <li className="p-2">
                      {blogs.blog_title}
                      {/* <br /> */}
          
                      <p className="text-xs">23 Likes</p>
                    </li>
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
