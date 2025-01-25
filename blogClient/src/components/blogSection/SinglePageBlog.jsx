import React, { useState, useEffect, useContext } from "react";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaTwitter,
  FaWhatsapp,
  FaShareAlt,
  FaFacebook,
  FaBookmark,
} from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import Layout from "../outlet/Layout";
import Swal from "sweetalert2";
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

  const [allLikes, setLikesALL] = useState([]);
  const [buttoncolor, setbuttoncolor] = useState();
  const [userLikedBlogs, setUserLikedBlogs] = useState([]);
  const [userid, setuserid] = useState();
  const [postid, setpostid] = useState();

  // share
  const [isOpen, setIsOpen] = useState(false);
  const [allsavedpostid, setSavedblodids] = useState([]);
  // console.log(allsavedpostid);
  const [statusId, setStatusId] = useState(null);








  // Social media share links
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      window.location.href
    )}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      window.location.href
    )}`,
  };

  const a = localStorage.getItem(`isLiked_${postid}_${userid}`);

  // filter liked user counts blog post specific
  const countLikes = allLikes.filter((likepost) => likepost.post_id == blogId);
  // console.log(countLikes.length);

  const handleLike = async (postId) => {
    try {
      const userId = localStorage.getItem("user_id");
      if (!userId) {
        alert("Please log in to like the post.");
        window.location.href = "/login";
        return;
      }

      const response = await like_blog_post(postId, userId);
      console.log(response);

      if (response.like_status) {
        const updatedLikes =
          response.like_status === "added"
            ? [...userLikedBlogs, postId]
            : userLikedBlogs.filter((id) => id !== postId);
        setUserLikedBlogs(updatedLikes);
        setuserid(userId);
        setpostid(postId);
        localStorage.setItem(
          `isLiked_${postId}_${userId}`,
          response.like_status === "added"
        );
        let a = localStorage.getItem(`isLiked_${postId}_${userId}`);
        console.log("the current id post:", a);
      }
    } catch (error) {
      alert("An error occurred while processing your like. Please try again.");
    }
  };

  // Initial like status fetch without using localStorage
  useEffect(() => {
    const fetchInitialLikeStatus = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        if (!userId) return;

        const response = await axios.get(
          "http://localhost/blogweb/backend/likeblogPost.php", // Endpoint to fetch liked posts
          { user_id: userId }
        );

        if (response.data?.likedPosts) {
          setUserLikedBlogs(
            response.data.likedPosts.map((post) => post.post_id)
          );
        }
      } catch (error) {
        console.error("Error fetching user liked blogs:", error);
      }
    };

    fetchInitialLikeStatus();
  }, []);


  useEffect(() => {
    const savedStatus = localStorage.getItem(`saved_${blogId}`);
    setIsSaved(savedStatus === "true");
  }, [blogId]);

  // Handle save action
  const handleSave = async () => {
    const user = localStorage.getItem("user_id");
    if (user) {
      try {
        const response = await axios.post(
          "http://localhost/blogweb/backend/saved_blog_post.php",
          { blog_id: blogId, user_id: user },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.message === "saved") {
          Swal.fire({
            title: "Success!",
            text: "Post saved successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
          setIsSaved(true); // Update state
          localStorage.setItem(`saved_${blogId}`, "true"); // Update localStorage
        } else {
          Swal.fire({
            title: "Failed!",
            text: response.data.message,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error saving post:", error.message);
        Swal.fire({
          title: "Error!",
          text: "An error occurred. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else {
      alert("Please log in to save the post.");
      window.location.href = "/login";
    }
  };


 
  //  console.log(blogId,user_id);

  // Handle unsave action
  const handleUnsave = async () => {
    const user = localStorage.getItem("user_id");
    if (user) {
      try {
        const response = await axios.post(
          "http://localhost/blogweb/backend/unsavePost.php",
          { blog_id: blogId, user_id: user },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status === "success") {
          Swal.fire({
            title: "Success!",
            text: "Post unsaved successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
          setIsSaved(false); // Update state
          localStorage.setItem(`saved_${blogId}`, "false"); // Update localStorage
        } else {
          Swal.fire({
            title: "Failed!",
            text: response.data.message,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error unsaving post:", error.message);
        Swal.fire({
          title: "Error!",
          text: "An error occurred. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else {
      alert("Please log in to unsave the post.");
      window.location.href = "/login";
    }
  };
  useEffect(() => {
    const savedStatus = localStorage.getItem(`saved_${blogId}`);
    setIsSaved(savedStatus === "true");
  }, [blogId]);


  const All_like_blog_post = async () => {
    try {
      //fetch api
      const api = await axios.get(
        "http://localhost/blogweb/backend/all_blog_likes_post.php",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(api.data);

      setLikesALL(api.data.Likes);
    } catch (error) {
      console.log("something  went wrong :", error);
    }
  };

  useEffect(() => {
    All_like_blog_post();
  }, []); // Dependency array to avoid unnecessary re-renders

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

  // share link via whatsapp ,
  const shareblogLink = () => {
    setIsOpen(!isOpen);
  };

  //all savedpost

  const allSavedPosts = async () => {
    const api = await axios.get(
      "http://localhost/blogweb/backend/getAllsavedPost.php",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //  console.log("all saved post is:",api.data.data);

    setSavedblodids(api.data.data);
  };

  useEffect(() => {
    allSavedPosts();
  }, []);

  //fetch this blog id which user currently view blog
  useEffect(() => {
    const fetchid = allsavedpostid.filter(
      (ids) =>
        ids.blog_id == blogId && ids.user_id == localStorage.getItem("user_id")
    );

    if (fetchid.length > 0) {
      const savedStatus = fetchid[0].saved_status;

      if (savedStatus !== statusId) {
        setStatusId(savedStatus); // Update state only if it changes
      }
    } else {
      if (statusId !== null) {
        setStatusId(null); // Clear state if no match is found
      }
    }
  }, [allsavedpostid, blogId, statusId]);

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
                      className="w-full max-h-96 object-contain rounded-lg mb-6"
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
                        className={`flex items-center ${
                          postid == blogId && a ? "text-red-500" : "text-black"
                        }`}
                        onClick={() => handleLike(blogId)}
                      >
                        <FaThumbsUp className="mr-2" />
                        <span>{countLikes.length}</span>
                      </button>

                      <button
                        className="flex items-center text-gray-700 hover:text-green-500"
                        onClick={shareblogLink}
                      >
                        <FaShareAlt className="mr-2" />
                      </button>

                      {isSaved  ? (
                        <button
                          onClick={()=>handleUnsave(blogId)}
                          className="flex flex-col"
                        >
                          <FaBookmark className="ml-4" /> Unsave
                        </button>
                      ) : (
                        <button onClick={handleSave}>
                          <FaBookmark className="ml-2" /> Save
                        </button>
                      )}



                    </div>

                    {/* share option Box */}
                    {isOpen && (
                      <div className="absolute left- mt-2 w-40 bg-white border rounded shadow-lg">
                        <ul className="flex flex-col p-4">
                          <li className="flex items-center">
                            <FaFacebook className="text-blue-600 mr-2 h-10 w-40" />
                            <a
                              href={shareLinks.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 hover:bg-gray-100 w-full"
                            >
                              Facebook
                            </a>
                          </li>
                          <li className="flex items-center">
                            <FaTwitter className="text-blue-400 mr-2 h-6 w-8 right-4" />
                            <a
                              href={shareLinks.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 hover:bg-gray-100 w-full"
                            >
                              Twitter
                            </a>
                          </li>
                          <li className="flex items-center">
                            <FaWhatsapp className="text-green-500 mr-2 h-10" />
                            <a
                              href={shareLinks.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 hover:bg-gray-100 w-full"
                            >
                              WhatsApp
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          {/* Related Blogs */}
          <div className="hidden lg:flex flex-col w-full lg:w-auto   mt-8 lg:mt-0 bg-white shadow-lg rounded-lg p-6">
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
                          className="h-24  w-40"
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
