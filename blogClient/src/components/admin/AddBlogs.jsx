import React, { useState } from "react";

const AddBlogs = () => {
  const [formData, setFormData] = useState({
    blog_title: "",
    blog_subtitle: "",
    blog_category: "",
    blog_content: "",
    blog_poster_img: null,
    blog_img: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(formData);
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
        </div>

        {/* Blog Subtitle */}
        <div className="mb-4">
          <label
            htmlFor="blog_subtitle"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Subtitle (1 Line)
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
        </div>

        {/* Blog Category */}
        <div className="mb-4">
          <label
            htmlFor="blog_category"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Category (1 words)
          </label>
          <input
            type="text"
            id="blog_category"
            name="blog_category"
            value={formData.blog_category}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Blog Content */}
        <div className="mb-4">
          <label
            htmlFor="blog_content"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Content (1500-2000 words)
          </label>
          <textarea
            id="blog_content"
            name="blog_content"
            value={formData.blog_content}
            onChange={handleChange}
            rows="8"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Blog Poster Image */}
        <div className="mb-4">
          <label
            htmlFor="blog_poster_img"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Poster Image
          </label>
          <input
            type="file"
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
            Blog Image
          </label>
          <input
            type="file"
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
