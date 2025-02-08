import React, { useEffect,useState } from "react";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import axios from 'axios';
import {Link}  from 'react-router-dom'

const AllBlogs = () => {

  const [blogData, setFilteredBlogs] = useState([]);
console.log(blogData.id);

  const HomeBlogDisplay = async () => {
    try {
      const response = await axios.get(
        "  http://localhost/blogweb/backend/allblogs.php"
      );
      // console.log(response.data)
      setFilteredBlogs(response.data.blogs);
    
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };



useEffect(()=>{
HomeBlogDisplay();
},[])

  // Handle actions (just for demo, can be customized later)
  const handleAction = (action, blogId) => {
    alert(`${action} for Blog ID: ${blogId}`);
  };

  return (
    <div>
      <div className="md:ml-64">
        <h1 className="mt-10 md:mt-0 font-bold text-2xl py-4">
          All Uploaded Blogs
        </h1>

        {/* Wrapper for horizontal scroll */}
        <div >
        <div className="overflow-x-auto">
  <table className="min- bg-white shadow rounded-lg table-auto lg:w-full">
    <thead>
      <tr className="bg-gray-200">
        <th className="p-2 text-left text-xs md:text-">Sr. No.</th>
        <th className="p-2 text-left text-xs md:text-">Blog Title</th>
        <th className="p-2 text-left text-xs md:text-">Blog Subtitle</th>
        <th className="p-2 text-left text-xs md:text-">Category</th>
        <th className="p-2 text-left text-xs md:text-">blog_author</th>
        <th className="p-2 text-left text-xs md:text-">Image</th>
        <th className="p-2 text-left text-xs md:text-">Action</th>
      </tr>
    </thead>

    <tbody>
      {blogData.map((blog, index) => (
        <tr key={blog.id} className="border-t">
          <td className="p-2 text-xs md:text-xs lg:text-">{index + 1}</td>
          <td className="p- text-xs md:text-xs lg:text-md">{blog.blog_title
          }</td>
          <td className="p-2 text-xs md:text-xs lg:text-md">{blog.blog_subtitle}</td>
          <td className="p-2 text-xs md:text-xs lg:text-md">{blog.blog_category}</td>
          <td className="p-2 text-xs md:text-xs lg:text-md">{blog.blog_author}</td>
          <td className="p-2  ">
            <img className="h-6 w-6 lg:h-14 lg:w-14" src={blog.blog_img} alt="" />
          </td>
          <td className="p-3 flex space-x-2">
            {/* View Icon */}
            <Link to={`/singlepage/${blog.id}`}>
          
            <FaEye className=" h-5" />
          
            </Link>
            {/* Update Icon */}
            <button
              onClick={() => handleAction("Update", blog.id)}
              className="bg- p-2 rounded-md text-xs md:text-"
            >
              <FaPencilAlt className=" h-5"/>
            </button>
            {/* Delete Icon */}
            <button
              onClick={() => handleAction("Delete", blog.id)}
              className="bg- p-2 rounded-md text-xs md:text-"
            >
               <FaTrash className=" h-5"/>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
