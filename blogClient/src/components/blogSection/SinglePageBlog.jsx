import React, { useState, useEffect, useContext } from "react";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaShareAlt,
  FaBookmark,
} from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import Layout from "../outlet/Layout";
import axios from "axios";
import ContextApp from "../context/ContextApp";

const SinglePageBlog = () => {
  const { like_blog_post } = useContext(ContextApp);

 


  const [isSaved, setIsSaved] = useState(false);

  const [blogs, setFilteredBlogs] = useState([]);

  const { id } = useParams();
  const blogId = Number(id); // Convert to number
  const [blogdata, setblogs] = useState([]);
  const [likes, setLikes] = useState(0); // Total likes for the post
  const [isLiked, setIsLiked] = useState(false); // Whether the user has liked the post
  
  // Function to handle like
  const handleLike = async (postId) => {
    try {
      const userId = localStorage.getItem("user_id");
      if (!userId) {
        alert("Please log in to like the post.");
        return;
      }
  
      // API call
      const response = await like_blog_post(postId, userId);
  
      if (response.like_status === "added") {
        setLikes((prevLikes) => prevLikes + 1); // Increment the like count
        setIsLiked(true); // Update to liked
        console.log("Like added successfully:", response.like_status);
      } else if (response.like_status === "removed") {
        setLikes((prevLikes) => prevLikes - 1); // Decrement the like count
        setIsLiked(false); // Update to not liked
        console.log("Like removed successfully:", response.like_status);
      } else {
        console.error("Unexpected response:", response.message);
      }
    } catch (error) {
      console.error("Error while handling like:", error);
    }
  };
  

  useEffect(() => {
    const fetchInitialLikeStatus = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        if (!userId) return;
  
        const response = await axios.post("http://localhost/blogweb/backend/like_blog_post.php", {
          post_id: blogId,
          user_id: userId,
        });
  
        if (response.data.liked) {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
  
        setLikes(response.data.totalLikes || 0); // Set initial like count
      } catch (error) {
        console.error("Error fetching like status:", error);
      }
    };
  
    fetchInitialLikeStatus();
  }, [blogId]);
  

  // Function to handle saving the post
  const handleSave = () => {
    setIsSaved(!isSaved); // Toggle saved state
  };

  // Handle unsave action
  const handleUnsave = () => {
    axios
      .post("/api/unsave", { post_id: blogId })
      .then((response) => setIsSaved(false))
      .catch((error) => console.error("Error unsaving the post:", error));
  };

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
      // console.log("Related Blogs:", relatedBlogs);

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
            <div key={i} className="relative w-full ">
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

        <div className="mb-10 w-full flex flex-col lg:flex-row justify-center items-start px-4 mt-10">
          <div className="lg:max-w-3xl  mb-10 bg-white shadow-lg rounded-lg p-6 text-left lg:w-2/3 lg:mr-8">
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

                    {/* like dislike share button */}
                    <div className="flex justify-start items-center gap-6 mt-6">
                      {/* like button */}
                      <button
                        className="flex items-center text-gray-700 hover:text-indigo-500"
                        onClick={() => handleLike(blogId)}
                      >
                        <FaThumbsUp className="mr-2" />
                        <span>{likes}</span>
                      </button>
                      {/* <button
                        className="flex items-center text-gray-700 hover:text-red-500"
                        onClick={handleDislike}
                      >
                        <FaThumbsDown className="mr-2" />
                        <span>{dislikes}</span>
                      </button> */}
                      <button
                        className="flex items-center text-gray-700 hover:text-green-500"
                        onClick={() =>
                          alert("Share functionality coming soon!")
                        }
                      >
                        <FaShareAlt className="mr-2" />
                      </button>
                      {isSaved ? (
                        <button onClick={handleUnsave}>
                          <FaBookmark /> Unsave
                        </button>
                      ) : (
                        <button onClick={handleSave}>
                          <FaBookmark /> Save
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Related Blogs */}
          <div className="hidden lg:flex w-full lg:w-auto   mt-8 lg:mt-0 bg-white shadow-lg rounded-lg p-6">
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