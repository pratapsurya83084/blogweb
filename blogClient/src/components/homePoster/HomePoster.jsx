import React from "react";
import { Link } from "react-router-dom";
const HomePoster = () => {
  return (
    <div>
      <div className="text-center mt-6 md:mt-20 ">
        <h2 className="font-bold text-2xl md:text-4xl">
          Welcome To Our Blogs{" "}
        </h2>{" "}
        <br />
        <div>
          <p className="text-xl p-4 pb-">
            Explore the World of Ideas Inspiration, Stories, and Insights Await
          </p>

          <div className="">
           
              <button className=" bg-gray-800 px-4 py-2 mb-10  items-center space-x-2">
              <Link to="/blog" className="flex justify-center"> 
                 <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>  </Link>
              </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePoster;
