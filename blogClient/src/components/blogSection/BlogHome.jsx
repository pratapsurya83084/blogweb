import React from "react";

const BlogHome = () => {
  return (
    <div className="flex justify-center mt-20  mb-20">
      <div className="flex md:space-x-4">
        {/* Left Column */}
        <div className="border border-yellow-600 hidden md:block w-[150px] h-[200px] bg-white text-black">
          <li>Blog</li>
          <li>Blog</li>
          <li>Blog</li>
          <li>Blog</li>
          <li>Blog</li>
          <li>Blog</li>
          <li>Blog</li>
          <li>Blog</li>
        </div>

        {/* Middle Column */}
        <div className="border border-yellow-600 mx-5 md:w-[560px] lg:w-[600px] xl:w-[890px] bg-white text-black">
          <h3 className="text-2xl font-semibold mb-4">Blog Title Goes Here</h3>

          {/* Card Image */}
          <img
            src="https://via.placeholder.com/400x250"
            alt="Blog Post"
            className="w-full h-48 object-cover mb-4 rounded"
          />

          {/* Card Description */}
          <p className="text-gray-600 mb-4">
            A brief description of the blog post that summarizes the content in
            a few lines.
          </p>

          {/* Read More Button */}
          <a
            href="/blog"
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            Read More &rarr;
          </a>
       
       


       {/* card2 */}

       <h3 className="text-2xl font-semibold mb-4">Blog Title Goes Here</h3>

{/* Card Image */}
<img
  src="https://via.placeholder.com/400x250"
  alt="Blog Post"
  className="w-full h-48 object-cover mb-4 rounded"
/>

{/* Card Description */}
<p className="text-gray-600 mb-4">
  A brief description of the blog post that summarizes the content in
  a few lines.
</p>

{/* Read More Button */}
<a
  href="/blog"
  className="text-purple-600 hover:text-purple-800 font-medium"
>
  Read More &rarr;
</a>





<h3 className="text-2xl font-semibold mb-4">Blog Title Goes Here</h3>

{/* Card Image */}
<img
  src="https://via.placeholder.com/400x250"
  alt="Blog Post"
  className="w-full h-48 object-cover mb-4 rounded"
/>

{/* Card Description */}
<p className="text-gray-600 mb-4">
  A brief description of the blog post that summarizes the content in
  a few lines.
</p>

{/* Read More Button */}
<a
  href="/blog"
  className="text-purple-600 hover:text-purple-800 font-medium"
>
  Read More &rarr;
</a>




<h3 className="text-2xl font-semibold mb-4">Blog Title Goes Here</h3>

{/* Card Image */}
<img
  src="https://via.placeholder.com/400x250"
  alt="Blog Post"
  className="w-full h-48 object-cover mb-4 rounded"
/>

{/* Card Description */}
<p className="text-gray-600 mb-4">
  A brief description of the blog post that summarizes the content in
  a few lines.
</p>

{/* Read More Button */}
<a
  href="/blog"
  className="text-purple-600 hover:text-purple-800 font-medium"
>
  Read More &rarr;
</a>

        </div>

        {/* Right Column */}
        <div className="border border-yellow-600 w-[180px] h-[230px] hidden lg:block bg-white text-black">
          <li>jhgghj</li>
          <li>jhgghj</li>
          <li>jhgghj</li>
          <li>jhgghj</li>
          <li>jhgghj</li>
          <li>jhgghj</li>
          <li>jhgghj</li>
          <li>jhgghj</li>
          <li>jhgghj</li>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
