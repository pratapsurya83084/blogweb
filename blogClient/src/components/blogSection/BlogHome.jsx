import React from "react";

const blogData = [
  {
    title: "The Rise of JavaScript Frameworks",
    subtitle: "Why frameworks dominate modern web development",
    paragraph:
      "JavaScript frameworks like React, Angular, and Vue have revolutionized how developers .",
    likeIcon: "❤️",
    date: "2024-12-13",
    time: "10:30 AM",
    img:"https://th.bing.com/th/id/OIP.6iEQK5FJWS7TqESiNbna8gHaDt?rs=1&pid=ImgDetMain"
  },
  {
    title: "AI and the Future of Work",
    subtitle: "How AI is reshaping industries",
    paragraph:
      "Artificial Intelligence is transforming industries by automating repetitive tasks.",
    likeIcon: "👍",
    date: "2024-12-12",
    time: "03:45 PM",
img:"https://th.bing.com/th/id/OIP.6iEQK5FJWS7TqESiNbna8gHaDt?rs=1&pid=ImgDetMain"

  },
  {
    title: "Mastering Tailwind CSS",
    subtitle: "A modern approach to styling",
    paragraph:
      "Tailwind CSS provides utility-first classes to create.",
    likeIcon: "✨",
    date: "2024-12-11",
    time: "09:15 AM",
    img:"https://th.bing.com/th/id/OIP.6iEQK5FJWS7TqESiNbna8gHaDt?rs=1&pid=ImgDetMain"
  },
  {
    title: "The Importance of Cybersecurity",
    subtitle: "Protecting data in a digital world",
    paragraph:
      "As more of our lives move online, the importance of cybersecurity cannot be overstated. ",
    likeIcon: "🔒",
    date: "2024-12-10",
    time: "01:00 PM",
    img:"https://th.bing.com/th/id/OIP.6iEQK5FJWS7TqESiNbna8gHaDt?rs=1&pid=ImgDetMain"
  },
  {
    title: "The Evolution of Mobile Apps",
    subtitle: "From simple utilities to essential tools",
    paragraph:
      "Mobile apps have evolved from basic utilities to sophisticated tools.",
    likeIcon: "📱",
    date: "2024-12-09",
    time: "08:30 PM",
    img:"https://th.bing.com/th/id/OIP.6iEQK5FJWS7TqESiNbna8gHaDt?rs=1&pid=ImgDetMain"
  },
];

console.log(blogData);

const BlogHome = () => {
  return (
    <div className="flex justify-center mt-20  mb-20">
      <div className="flex md:space-x-4">
        {/* Left Column */}
        <div className=" hidden md:block w-[150px] h-[330px]  text-black">
          <ul className="bg-white ">
            <li className="p-2 ">About Us</li>
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
        <div className="bg-white  mx-2 md:w-[560px] lg:w-[600px] xl:w-[890px]  text-black">
          <div className="">
            <ul className="flex  justify-center items-center pt-2">
              <li className="text-xs md:text-sm  cursor-pointer px-2 md:p-2">
                Latest{" "}
              </li>
              <li className="text-xs md:text-sm  cursor-pointer px-2 md:p-2">
                Popular{" "}
              </li>
              <li className="text-xs md:text-sm  cursor-pointer px-2 md:p-2">
                Saved{" "}
              </li>
              <li className="text-xs md:text-sm  cursor-pointer px-2 md:p-2">
                Lifestyle{" "}
              </li>

              <li className="text-xs md:text-sm cursor-pointer px-2 md:p-2">
                Shopping{" "}
              </li>
              <li className="hidden sm:flex text-xs md:text-sm  cursor-pointer px-2 md:p-2">
                Health{" "}
              </li>
              <li className="hidden sm:flex text-xs md:text-sm cursor-pointer px-2 md:p-2">
                Travel{" "}
              </li>
              <li className="hidden sm:flex text-xs md:text-sm cursor-pointer px-2 md:p-2">
                Food{" "}
              </li>
              <li className="hidden sm:flex text-xs md:text-sm cursor-pointer px-2 md:p-2">
                See All{" "}
              </li>
            </ul>
          </div>


          {/* show blog cards */}
          <div className="grid grid-cols- gap-6">
      {blogData.map((blog, index) => (
        <div
          key={index}
          className="flex md:flex-row items-center bg-white  rounded-lg overflow-hidden"
        >
          {/* Left Content */}
          <div className="p-6 md:w-2/3">
            <h2 className="text-sm md:text-xl font-bold text-indigo-600">{blog.title}</h2>
            <h3 className="text-xs md:text-md font-semibold text-gray-500 mt-2">
              {blog.subtitle}
            </h3>
            <p className="text-gray-700 mt-4 text-sm">{blog.paragraph}</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <span className="text-xs md:text-sm">{blog.likeIcon}</span>
              <span className="text-xs md:text-sm">{blog.date}</span>
              <span className="text-xs md:text-sm">{blog.time}</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/3">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-full object-cover p-2"
            />
          </div>
        </div>
      ))}
    </div>












        </div>

        {/* Right Column */}
        <div className=" bg-white   w-[180px] h-[230px] hidden lg:block  text-black">
          <div>
            <h2 className="p-2">Popular Posts</h2>
            <ul className=" p-2">
              <li className="p-2">
                what is lifstyle if you want to stop
                <br />
                <p className="text-xs">23 Likes</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
