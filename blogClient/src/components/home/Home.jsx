import React from "react";
import Navbar from "../navbar/Navbar";
import BlogHome from "../blogSection/BlogHome";
import Footer from "../footer/Footer";
import HomePoster from "../homePoster/HomePoster";
import { useState, useEffect } from "react";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);
  return (
    <div className="min-h-screen">
      {isLoading ? (
        // Loading Screen
        <div className="flex items-center justify-center bg-purple-600 text-white min-h-screen">
          <div className="flex space-x-2">
            <div className="dot w-4 h-4 bg-white rounded-full animate-bounce "></div>
            <div className="dot w-4 h-4 bg-white rounded-full animate-bounce delay-200"></div>
            <div className="dot w-4 h-4 bg-white rounded-full animate-bounce delay-400"></div>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <HomePoster />
          <BlogHome />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
