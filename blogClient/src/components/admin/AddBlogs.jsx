import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddBlogs = () => {
  const [formData, setFormData] = useState({
    blog_title: "",
    blog_subtitle: "",
    blog_category: "",
    blog_content: "",
    blog_author: "",
    blog_post_date: "",
    blog_poster_img: null,
    blog_img: null,
  });


  const [wordLimitExceeded, setWordLimitExceeded] = useState(false);
  const [titleWordLimitExceeded, setTitleWordLimitExceeded] = useState(false);
  const [subtitleWordLimitExceeded, setSubtitleWordLimitExceeded] = useState(false);

  // Handle change of input fields
  const handleChange = (e) => {
    
    const { name, value, files } = e.target;

    // Count the number of words for validation
    const wordCount = value.trim().split(/\s+/).length;

    if (name === "blog_title") {
      // Validate title length (3-4 words)
      if (wordCount > 6) {
        setTitleWordLimitExceeded(true);
      } else {
        setTitleWordLimitExceeded(false);
      }
    } else if (name === "blog_subtitle") {
      // Validate subtitle length (1 line)
      if (wordCount > 15) { // Assume 20 words for a subtitle limit
        setSubtitleWordLimitExceeded(true);
      } else {
        setSubtitleWordLimitExceeded(false);
      }
    } else if (name === "blog_content") {
      // Validate content length (1500-2000 words)
      if ( wordCount > 1500 ) {
        
        setWordLimitExceeded(true)
          alert("Please enter 1500 word or less than 2000 words");
   
      } else {
        setWordLimitExceeded(false);
      }
    }

    if (files) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formdata : ",formData);
    if (titleWordLimitExceeded || subtitleWordLimitExceeded || wordLimitExceeded) {
      Swal.fire({
        title: "Error!",
        text: "Please check word limit restrictions.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return; // Stop the form submission
    }

    const api = await axios.post(
      "http://localhost/blogweb/backend/admin/addblog.php",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (api.data.success === true) {
      Swal.fire({
        title: "Success!",
        text: "Blog uploaded successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to upload the blog.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="mt-10 md:mt-0 max-w-4xl md:ml-64 mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Blog Title */}
        <div className="mb-4">
          <label
            htmlFor="blog_title"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Title (3-4 words)
          </label>
          <input
            type="text"
            id="blog_title"
            name="blog_title"
            value={formData.blog_title}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            required
          />
          {titleWordLimitExceeded && (
            <p className="text-red-500 text-sm mt-2">Title must be 4 - 5 words.</p>
          )}
        </div>

        {/* Blog Subtitle */}
        <div className="mb-4">
          <label
            htmlFor="blog_subtitle"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Subtitle (1 line)
          </label>
          <input
            type="text"
            id="blog_subtitle"
            name="blog_subtitle"
            value={formData.blog_subtitle}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            required
          />
          {subtitleWordLimitExceeded && (
            <p className="text-red-500 text-sm mt-2">Subtitle must be 1 line.</p>
          )}
        </div>

        {/* Blog Category */}
        <div className="mb-4">
          <label
            htmlFor="blog_category"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Category (1 word)
          </label>
        
          <select
  id="blog_category"
  name="blog_category"
  required
  className="w-full border border-black"
  value={formData.blog_category}
  onChange={handleChange}
>
  <option value="" disabled selected>
    Select a category
  </option>
  <option value="popular">Popular</option>
  <option value="lifestyle">Lifestyle</option>
  <option value="shopping">Shopping</option>
  <option value="technology">Technology</option>
  <option value="sports">Sports</option>
  <option value="health">Health</option>
  <option value="travel">Travel</option>
  <option value="food">Food</option>
</select>



        </div>

        {/* Blog Content */}
        <div className="mb-4">
          <label htmlFor="" className="block text-sm font-medium text-gray-700">
            Blog Content (1500-2000 words)
          </label>
          <textarea
            name="blog_content"
            value={formData.blog_content}
            onChange={handleChange}
            className="mt-2 p-3 h-60 w-full border border-gray-300 rounded-md"
            placeholder="Write your blog content here"
            required
          />
          {wordLimitExceeded && (
            <p className="text-red-500 text-sm mt-2">
              Content must be Required between 1500-2000 words.
            </p>
          )}
        </div>

        {/* Blog Author */}
        <div className="mb-4">
          <label
            htmlFor="blog_author"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Author
          </label>
          <input
            type="text"
            id="blog_author"
            name="blog_author"
            placeholder="Enter author name"
            value={formData.blog_author}
            onChange={handleChange}
            autoComplete="off"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Blog Post Date */}
        <div className="mb-4">
          <label
            htmlFor="blog_post_date"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Post Date
          </label>
          <input
            type="date"
            id="blog_post_date"
            name="blog_post_date"
            value={formData.blog_post_date}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Blog Poster Image */}
        <div className="mb-4">
          <label
            htmlFor="blog_poster_img"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Poster Image(URL)
          </label>
          <input
            type="text"
            id="blog_poster_img"
            name="blog_poster_img"
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            accept="image/*"
            required
          />
        </div>

        {/* Blog Image */}
        <div className="mb-4">
          <label
            htmlFor="blog_img"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Image(URL)
          </label>
          <input
            type="text"
            id="blog_img"
            name="blog_img"
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            accept="image/*"
            required
          />
        </div>

        {/* Add Post Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
