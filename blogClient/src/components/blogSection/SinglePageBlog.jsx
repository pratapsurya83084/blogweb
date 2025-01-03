import React, { useState, useEffect } from "react";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaShareAlt,
  FaBookmark,
} from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import Layout from "../outlet/Layout";
import axios from "axios";

const SinglePageBlog = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => setLikes((prev) => prev + 1);
  const handleDislike = () => setDislikes((prev) => prev + 1);
  const handleSave = () => setIsSaved((prev) => !prev);

  const [blogs, setFilteredBlogs] = useState([]);
  const { id } = useParams();
  const blogId = Number(id); // Convert to number
  const [blogdata, setblogs] = useState([]);

  // Fetch all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost/blogweb/backend/allblogs.php"
        );
        setFilteredBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs", error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (!blogs.length || !blogId) return; // Ensure blogs and blogId are available

    // Filter blogs by ID
    const idwise_blogpost = blogs.filter((blog) => blog.id == blogId);
    setblogs(idwise_blogpost);

    // Check if a blog post is found
    if (idwise_blogpost.length > 0) {
      // Filter blogs by category
      const relatedBlogs = blogs.filter(
        (blog) =>
          blog.blog_category.toLowerCase() ===
          idwise_blogpost[0].blog_category.toLowerCase()
      );
      console.log("Related Blogs:", relatedBlogs);

      if (relatedBlogs.length > 0) {
        setblogs(relatedBlogs);
      } else {
        console.log("No related blogs found in the same category.");
      }
    } else {
      console.log("No blog found with the given ID.");
    }
  }, [blogs, blogId]);

  return (
    <Layout>
      <div>
        {blogdata.map((blog, i) => {
          return (
            <div key={i} className="relative w-full">
              <img
                src={blog.blog_poster_img}
                alt="poster image"
                className="w-full h-auto max-h-[700px] object-cover"
              />
              <div className="absolute inset-0 text-white flex flex-col p-2 text-center justify-center items-center">
                <h1 className="text-2xl sm:text-5xl md:text-5xl font-bold mb-2">
                  {blog.blog_title}
                </h1>
              </div>
            </div>
          );
        })}

        <div className="mb-10 flex flex-col lg:flex-row justify-center items-start px-4 mt-10">
          <div className="max-w-2xl mb-10 bg-white shadow-lg rounded-lg p-6 text-left lg:w-2/3 lg:mr-8">
            {blogdata &&
              blogdata.map((blog, i) => {
                return (
                  <div key={i}>
                    <img
                      src={blog.blog_img}
                      className="w-full h-96 object-cover rounded-lg mb-6"
                    />
                    <h1 className="text-xl md:text-3xl font-bold mb-4 text-indigo-600">
                      {blog.blog_title}
                    </h1>
                    <p className="text-gray-500 text-sm mb-4">
                      By{" "}
                      <span className="font-semibold">{blog.blog_author}</span>{" "}
                      on {blog.blog_post_date}
                    </p>
                    <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                      {blog.blog_content}
                    </p>

                    <div className="flex justify-start items-center gap-6 mt-6">
                      <button
                        className="flex items-center text-gray-700 hover:text-indigo-500"
                        onClick={handleLike}
                      >
                        <FaThumbsUp className="mr-2" />
                        <span>{likes}</span>
                      </button>
                      <button
                        className="flex items-center text-gray-700 hover:text-red-500"
                        onClick={handleDislike}
                      >
                        <FaThumbsDown className="mr-2" />
                        <span>{dislikes}</span>
                      </button>
                      <button
                        className="flex items-center text-gray-700 hover:text-green-500"
                        onClick={() =>
                          alert("Share functionality coming soon!")
                        }
                      >
                        <FaShareAlt className="mr-2" />
                      </button>
                      <button
                        className={`flex items-center ${
                          isSaved ? "text-yellow-500" : "text-gray-700"
                        } hover:text-yellow-500`}
                        onClick={handleSave}
                      >
                        <FaBookmark className="mr-2" />
                        <span>{isSaved ? "Saved" : "Save"}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Related Blogs */}
          <div className="lg:w-1/3 mt-8 lg:mt-0 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Related Blogs</h2>
            <div className="space-y-4">
              {blogdata.map((blog, i) => {
                return (
                  <div
                    key={blog.id}
                    className="flex gap-5 bg-white p-4 shadow-lg rounded-lg w-full"
                  >
                    <Link to={`/singlepage/${blog.id}`}>
                      <div>
                        <img
                          src={blog.blog_img}
                          className="h-24 w-40"
                          alt="Related Blog"
                        />
                      </div>
                    </Link>

                    <div>
                      <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                        {blog.blog_category}
                      </h3>
                      <h3 className="font-semibold text-xs">
                        {blog.blog_title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        By {blog.blog_author} | {blog.blog_post_date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SinglePageBlog;
