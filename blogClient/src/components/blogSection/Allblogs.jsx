import React, { useState } from 'react';
import Layout from "../outlet/Layout";
import {Link} from 'react-router-dom';
const blogData = [
  {
    category: "lifestyle",
    id: 1,
    title: "The Latest Trends in Home Decor",
    author: "Jane Smith",
    date: "2024-05-30",
    url: "https://imgeng.jagran.com/images/2023/mar/healthy-lifestyle-changes-for-weight-loss1677901066822.jpg",
    desc: "Embrace the Art of Living: Tips and Inspiration for a Balanced, Stylish, and Joyful Life... ",
  },
  {
    category: "latest",
    id: 2,
    title: "How to Achieve Work-Life Balance in a Remote Work Era",
    author: "John Doe",
    date: "2024-05-25",
    url: "https://imageio.forbes.com/specials-images/imageserve/646b09c56ffa41bec1a2e237/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    desc: " Achieve the perfect harmony between career and personal life with tips ",
  },
 
  {
    category: "shopping",
    id: 3,
    title: "Top 10 Gadgets 2024",
    author: "Emily Johnson",
    date: "2024-05-28",
    url: "https://img.freepik.com/premium-photo/free-shipping-day-deals_1198081-25241.jpg?w=996",
    desc: "Stay updated with the latest trends, must-have products, and shopping tips to elevate your style and lifestyle... ",
  },

  {
    category: "health",
    id: 4,
    title: "nature",
    author: "Michael Brown",
    date: "2024-05-26",
    url: "https://img.freepik.com/free-photo/nutrition-healthy-diet-plan-concept_53876-125014.jpg?t=st=1734108211~exp=1734111811~hmac=394a3a8d5538eb09681a74bd5a31c3294de1068a569ef704be2957cecba551ed&w=996",
    desc: "Explore the power of natural remedies and holistic practices to nurture your body, mind, and soul for optimal health... ",
  },
  {
    category: "food",
    id: 5,
    title: "benefits of diets",
    author: "Sarah Lee",
    date: "2024-05-27",
    url: "https://img.freepik.com/free-photo/top-view-tasty-cooked-potatoes-with-greens-dark-desk-potato-dinner-dish-cips-cooking-meal_140725-102170.jpg?t=st=1734108252~exp=1734111852~hmac=eae5a16147cf37119fd9449b1bfaeaf27a465d4e389f144496ccb55225df6a77&w=996",
    desc: "Discover the joy of food with delicious recipes, cooking tips, and culinary trends that will excite your taste buds...",
  },
  {
    category: "popular",
    id: 6,
    title: "How to Maintain Mental Health ",
    author: "Chris Green",
    date: "2024-05-24",
    url: "https://img.freepik.com/premium-photo/health-insurance-web-site-modish-registration-system-easy-form-filling_31965-239177.jpg?w=996",
    desc: "Maintaining good health involves a combination of physical, mental, and emotional practices. Here are some key steps to follow...",
  },
  {
    category: "latest",
    id: 7,
    title: "Top 5 Destinations to Visit in 2024",
    author: "Alex White",
    date: "2024-05-29",
    url: "https://img.freepik.com/free-photo/woman-take-photo-fuji-mountains-autumn-japan-travel-concept_335224-9.jpg?t=st=1734108373~exp=1734111973~hmac=e83dd1c2f82713961cffa5f95c32d0a03069469960b92fa31c135d71bcdef9f2&w=996",

    desc: "Best destination for traveling in the world-Paris,France,Kyoto ,japan,National parks ,cape Town ,South Africa...",
  },
  {
    category: "travel",
    id: 8,
    title: "Travel Tips for Solo Adventurers",
    author: "Laura Black",
    date: "2024-05-23",
    url: "https://img.freepik.com/premium-photo/plane-passport-money-camera-note-pad-with-text-travel-tips-binoculars-jeans-watch-flip-flops-wallet_656538-3568.jpg?w=996",
    desc: "Embark on unforgettable journeys and explore the beauty of the world, one destination at a time.",
  },

];

const Allblogs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter blogs based on the search term
  const filteredBlogs = blogData.filter(blog =>
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Popular category blog
  const popularBlog = blogData.filter(blog => blog.category.toLowerCase() === "popular");

  return (
    <Layout>
      {/* Search Input */}
      <div className='flex justify-center mt-10 m-6'>
        <input
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search blogs . . . .'
          className='w-[400px] h-[40px] rounded-xl p-2 border border-gray-300'
        />
      </div>

      <div className=" mx-auto px-4 mt-10 mb-10">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-12 md:mt-20 md:mb-20">
          {/* Left */}
       {/** Display blogs dynamically based on the search term */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 rounded w-full lg:w-[900px] gap-6">
  {(searchTerm ? filteredBlogs : blogData).map((blog) => (
    <div
      key={blog.id}
      className="bg-white flex flex-col items-start gap-4 p-4 rounded-lg shadow-lg  group transform transition duration-300 ease-in-out hover:-translate-y-3"
    >
      {/* Image */}
      <div className="img w-full h-[200px] flex justify-center items-center">
        <img
          className="w-full h-full object-cover rounded-md"
          src={blog.url}
          alt={blog.title}
        />
      </div>
      {/* Text Content */}
      <div className="flex-1 w-full">
        <h2 className="text-indigo-600 font-bold uppercase text-sm mb-2">
          {blog.category}
        </h2>
        <h4 className="font-semibold text-lg mb-2">{blog.title}</h4>
        <p className="text-gray-600 mb-2">{blog.desc}</p>
        <p className="text-sm text-gray-500 mb-1">{blog.author}</p>
        <p className="text-xs text-gray-400">{blog.date}</p>
      </div>
      <div className='flex justify-center items-center float-right'>
        <Link to={`/singlepage/${blog.id}`}>
          <button className='bg-indigo-700 text-white p-2 px-5 rounded'>View</button>
        </Link>
      </div>
    </div>
  ))}
</div>


          {/* Right: Popular Blogs */}
          <div className=" mt-5 ">
            <h1 className="text-xl font-semibold mb-4">Popular Blogs</h1>
            {popularBlog.map((pop) => (
              <div key={pop.id} className="p-2 bg-white rounded-xl flex items-start gap-4 mb-4">
                {/* Blog Image */}
               <Link to={`/singlepage/${pop.id}`}> <img
                  className="h-[80px] w-[90px] rounded-xl object-cover"
                  src={pop.url}
                  alt="Related Blog"
                /></Link>
                {/* Blog Details */}
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-indigo-600">{pop.category}</h3>
                  <p className="font-medium text-gray-800 text-sm mb-1">{pop.title}</p>
                  <p className="text-gray-600 text-xs">{pop.author}</p>
                  <p className="text-gray-400 text-xs">{pop.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </Layout>
  );
};
export default Allblogs;
