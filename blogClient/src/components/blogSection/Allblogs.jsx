import React, { useState } from 'react';
import Layout from "../outlet/Layout";

const blogData = [
  {
    category: "lifestyle",
    id: 1,
    title: "The Latest Trends in Home Decor",
    author: "Jane Smith",
    date: "2024-05-30",
    url: "https://imgeng.jagran.com/images/2023/mar/healthy-lifestyle-changes-for-weight-loss1677901066822.jpg",
    desc: "Embrace the Art of Living: Tips and Inspiration for a Balanced, Stylish, and Joyful Life...",
  },
  {
    category: "latest",
    id: 2,
    title: "How to Achieve Work-Life Balance in a Remote Work Era",
    author: "John Doe",
    date: "2024-05-25",
    url: "https://imageio.forbes.com/specials-images/imageserve/646b09c56ffa41bec1a2e237/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    desc: "Achieve the perfect harmony between career and personal life with tips...",
  },
  {
    category: "health",
    id: 3,
    title: "How to Maintain Mental Health",
    author: "Chris Green",
    date: "2024-05-24",
    url: "https://img.freepik.com/premium-photo/health-insurance-web-site-modish-registration-system-easy-form-filling_31965-239177.jpg?w=996",
    desc: "Maintaining good health involves a combination of physical, mental, and emotional practices...",
  },
  // Add more blog data as needed
];

const Allblogs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter blogs based on the search term
  const filteredBlogs = blogData.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
<div className="container mx-auto px-4 mt-10 mb-10">
  <div className="flex flex-col lg:flex-row justify-center lg:gap-12 md:mt-20 md:mb-20">
    {/* Left */}
    <div className="bg-white rounded w-full lg:w-[900px] gap-6">
  {blogData.map((blog) => (
    <div
      key={blog.id}
      className="left flex flex-col lg:flex-row items-center lg:items-start gap-4 p-4 rounded-lg shadow-lg mb-6"
    >
      {/* Text Content */}
      <div className="left-text flex-1">
        <h2 className="text-indigo-600 font-bold uppercase text-sm mb-2">
          {blog.category}
        </h2>
        <h4 className="font-semibold text-lg">{blog.title}</h4>
        <p className="text-gray-600 mb-2">{blog.desc}</p>
        <p className="text-sm text-gray-500">{blog.author}</p>
        <p className="text-xs text-gray-400">{blog.date}</p>
      </div>

      {/* Image */}
      <div className="img flex-shrink-0 w-[120px] h-[100px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={blog.url}
          alt={blog.title}
        />
      </div>
    </div>
  ))}
</div>


    {/* Right */}
    <div className="bg-white mt-14 lg:mt-0 p-4 w-full lg:w-[300px] rounded-md shadow-lg">
      <h1 className="text-xl font-semibold mb-4">Related Blogs</h1>
      <div className="flex items-start gap-4">
        {/* Blog Image */}
        <img
          className="h-[80px] w-[90px] rounded-xl object-cover"
          src={blogData[2].url}
          alt="Related Blog"
        />
        {/* Blog Details */}
        <div className="flex flex-col">
          <p className="font-medium text-gray-800 text-sm mb-1">
            {blogData[0].title}
          </p>
          <p className="text-gray-600 text-xs">{blogData[0].desc}</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </Layout>
  );
};

export default Allblogs;
