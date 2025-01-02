import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



const BlogHome = () => {
  const [click, setClick] = useState(false);
 
const [items,setblogs]=useState();
console.log(items);



  const togglemodeDropdown = () => {
    setClick(!click);
  };

  const categoryBlog = (category) => {
    console.log("Selected category: " + category);
    
    if (category.toLowerCase() === "all") {
      // Show all blogs if "All" is selected
      setblogs(items);
    } else {
      // Filter blogs based on the selected category (case-insensitive)
      const filteredData = items.filter(
        (blog) => blog.blog_category.toLowerCase() === category.toLowerCase()
      );
  
      // Log the filtered data for debugging
      console.log("Filtered Data:", filteredData);
  
      // Update the blogs state with the filtered data
      setblogs(filteredData);
    }
  };
  
  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("  http://localhost/blogweb/backend/allblogs.php");
      // console.log(response.data)
      setblogs(response.data.blogs);
       
      } catch (error) {
        console.error("Error fetching blogs", error);
      }
    };
    
    fetchBlogs();
  }, []);
  
  //only popular  categories
  // const popularBlogs = items.filter(blog => blog.blog_category === 'popular');

  // console.log(popularBlogs);
  
 

  return (
    <div className="flex justify-center mt-20  mb-20">
      <div className="flex md:space-x-4">
        {/* Left Column */}
        <div className=" hidden md:block w-[150px] h-[330px] bg-white rounded">
          <ul className="">
            {/* <Link to={"/about"}> */}
              {" "}
              <li className="p-2 ">About Us</li>{" "}
            {/* </Link> */}
            <li className="p-2 ">Advertise with us</li>
            <li className="p-2 ">Safety Tips</li>
            <li className="p-2 ">FAQs</li>
            <li className="p-2 ">Blogs</li>
            <li className="p-2 ">Terms & Condition</li>
            <li className="p-2 ">Privacy Privacy</li>
            <li className="p-2 ">Contact Us</li>
          </ul>
        </div>

        {/* Middle Column */}
        <div className="bg-white rounded  mx-2 md:w-[560px] lg:w-[600px] xl:w-[890px]  ">
          <div className="">
            <ul className="flex justify-center items-center pt-2">
              <li
                className="text-xs md:text-sm cursor-pointer px-2 md:p-2"
              onClick={() => categoryBlog("popular")}
              >
                Popular
              </li>
            
              {/* <li
                className="text-xs md:text-sm cursor-pointer px-2 md:p-2"
                onClick={() => categoryBlog("saved")}
              >
                Saved
              </li> */}
            
            
              <li
                className="text-xs md:text-sm cursor-pointer px-2 md:p-2"
                onClick={() => categoryBlog("lifestyle")}
              >
                Lifestyle
              </li>
              <li
                className="text-xs md:text-sm cursor-pointer px-2 md:p-2"
                onClick={() => categoryBlog("shopping")}
              >
                Shopping
              </li>

              {/* Click on 3-dot menu */}
              <li
                onClick={togglemodeDropdown}
                className="relative flex sm:hidden p-2 cursor-pointer"
              >
                ⋮{/* Dropdown menu */}
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

              {/* Hidden items for larger screens */}
              <li
                className="hidden sm:flex text-xs md:text-sm cursor-pointer px-2 md:p-2"
                onClick={() => categoryBlog("health")}
              >
                Health
              </li>
              <li
                className="hidden sm:flex text-xs md:text-sm cursor-pointer px-2 md:p-2"
                onClick={() => categoryBlog("travel")}
              >
                Travel
              </li>
              <li
                className="hidden sm:flex text-xs md:text-sm cursor-pointer px-2 md:p-2"
                onClick={() => categoryBlog("food")}
              >
                Food
              </li>
              <li
                className="hidden sm:flex text-xs md:text-sm cursor-pointer px-2 md:p-2"
                onClick={() => setblogs(items)}
              >
                All
              </li>
            </ul>
          </div>

          {/* show blog cards */}
          <div className="grid grid-cols- gap-6">
            {items &&
              items.map((blog) => (
                <div
                  key={blog.id}
                  className="flex md:flex-row items-center bg-white  rounded-lg overflow-hidden"
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
                    <div className=" items-center gap-4 mt-4 text-sm text-gray-500">
                      <span className="text-xs md:text-sm">{blog.blog_author}</span>{" "}
                      <br />
                      <span className="text-xs md:text-sm">{blog.blog_post_date}</span>
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
        {/* <div className=" bg-white rounded  w-[180px] h-[230px] hidden lg:block  "> 
         {
          items.map((blogs)=>{
            return(
              <div key={blogs.id}>
              <h2 className="p-2">Popular Posts</h2>
              <ul className=" p-2">
                <li className="p-2">
                {blogs.title}
                  <br />
                  <p className="text-xs">23 Likes</p>
                </li>
              </ul>
            </div>
            )
          })
         }
      
        </div> */}
      </div>
    </div>
  );
};

export default BlogHome;
