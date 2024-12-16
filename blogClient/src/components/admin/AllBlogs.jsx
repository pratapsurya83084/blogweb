import React from "react";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";

const AllBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "React Basics",
      subtitle: "Introduction to React",
      category: "Technology",
      img:"https://th.bing.com/th/id/OIP.0HvSu5ua_aiSkqbIfLU8lwHaE8?rs=1&pid=ImgDetMain"
    },
    {
      id: 2,
      title: "Understanding JavaScript",
      subtitle: "Deep Dive into JavaScript",
      category: "Programming",
      img:"https://th.bing.com/th/id/OIP.-HHfqZ3bGRsZbIh8uZVu2AHaD4?rs=1&pid=ImgDetMain"
    },
    {
      id: 3,
      title: "CSS for Beginners",
      subtitle: "Getting Started with CSS",
      category: "Design",
      img:"https://www.zdnet.com/a/hub/i/r/2021/05/04/e32662ed-ce31-4ad5-8408-d25becca4b6f/resize/1200xauto/c5d4fa5a6a3722dd3ed3539a77c2df79/shutterstock-1893752428.jpg"
    },
  ];

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
        <th className="p-2 text-left text-xs md:text-">Image</th>
        <th className="p-2 text-left text-xs md:text-">Action</th>
      </tr>
    </thead>

    <tbody>
      {blogs.map((blog, index) => (
        <tr key={blog.id} className="border-t">
          <td className="p-2 text-xs md:text-xs lg:text-">{index + 1}</td>
          <td className="p- text-xs md:text-xs lg:text-md">{blog.title}</td>
          <td className="p-2 text-xs md:text-xs lg:text-md">{blog.subtitle}</td>
          <td className="p-2 text-xs md:text-xs lg:text-md">{blog.category}</td>
          <td className="p-2  ">
            <img className="h-6 w-6 lg:h-14 lg:w-14" src={blog.img} alt="" />
          </td>
          <td className="p-3 flex space-x-2">
            {/* View Icon */}
            <button
              onClick={() => handleAction("View", blog.id)}
              className="bg- p-2 rounded-md text-xs md:text-"
            >
              <FaEye className=" h-5" />
            </button>
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
