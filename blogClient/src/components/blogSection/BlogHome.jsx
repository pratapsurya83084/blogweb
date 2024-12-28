import React, { useState } from "react";
import { Link } from "react-router-dom";

const blogData = [
  {
    category: "lifestyle",
    id: 1,
    title: "The Latest Trends in Home Decor",
    author: "Jane Smith",
    date: "2024-05-30",
    url: "https://imgeng.jagran.com/images/2023/mar/healthy-lifestyle-changes-for-weight-loss1677901066822.jpg",
    desc: "Embrace the Art of Living: Tips and Inspiration for a Balanced, Stylish, and Joyful Life Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?",
  },
  {
    category: "latest",
    id: 2,
    title: "How to Achieve Work-Life Balance in a Remote Work Era",
    author: "John Doe",
    date: "2024-05-25",
    url: "https://img.freepik.com/free-photo/fake-news-works-coming-out-megaphone_23-2149261953.jpg?t=st=1735394083~exp=1735397683~hmac=04c229725222f40cea20b465dc1b565e397003cd46073dac89dc928f93cc8760&w=740",
    desc: " Achieve the perfect harmony between career and personal life with tips Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?",
  },
  {
    category: "technology",
    id: 2,
    title: "In 2025 Top 10 most valuable technology",
    author: "John Doe",
    date: "2024-05-25",
    url: "https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?t=st=1735393834~exp=1735397434~hmac=5db1f94c518fe7f444626aa84f8d3e87409dc9036e26b21b8bf9d4eb16bfa82f&w=360",
    desc: " Achieve the perfect harmony between career and personal life with tips Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?",
  },
  {
    category: "shopping",
    id: 3,
    title: "Top 10 Gadgets 2024",
    author: "Emily Johnson",
    date: "2024-05-28",
    url: "https://img.freepik.com/free-photo/pair-man-woman-wearing-glasses-carried-lots-paper-bags-shopping_1150-27742.jpg?t=st=1735394179~exp=1735397779~hmac=7c20b39f84f4a4f50b16f2d4f30dada42498bb67bd7b8d972f0044f9d86bb644&w=360",
    desc: "Stay updated with the latest trends, must-have products, and shopping tips to elevate your style and lifestyle Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? ",
  },
  {
    category: "health",
    id: 4,
    title: "nature",
    author: "Michael Brown",
    date: "2024-05-26",
    url: "https://img.freepik.com/free-photo/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand_335224-762.jpg?t=st=1735394207~exp=1735397807~hmac=1139b06d8cbb62d2c0650e5c4eaa4e35fb81634d73f1d93cd961e803c8d39abe&w=1060",
    desc: "Explore the power of natural remedies and holistic practices to nurture your body, mind, and soul for optimal health Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?. ",
  },
  {
    category: "food",
    id: 5,
    title: "benefits of diets",
    author: "Sarah Lee",
    date: "2024-05-27",
    url: "https://img.freepik.com/free-photo/top-view-tasty-cooked-potatoes-with-greens-dark-desk-potato-dinner-dish-cips-cooking-meal_140725-102170.jpg?t=st=1734108252~exp=1734111852~hmac=eae5a16147cf37119fd9449b1bfaeaf27a465d4e389f144496ccb55225df6a77&w=996",
    desc: "Discover the joy of food with delicious recipes, cooking tips, and culinary trends that will excite your taste buds Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?",
  },
  {
    category: "popular",
    id: 6,
    title: "How to Maintain Mental Health ",
    author: "Chris Green",
    date: "2024-05-24",
    url: "https://img.freepik.com/premium-photo/health-insurance-web-site-modish-registration-system-easy-form-filling_31965-239177.jpg?w=996",
    desc: "Maintaining good health involves a combination of physical, mental, and emotional practices. Here are some key steps to follow Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?.",
  },
  {
    category: "latest",
    id: 7,
    title: "Top 5 Destinations to Visit in 2024",
    author: "Alex White",
    date: "2024-05-29",
    url: "https://img.freepik.com/free-photo/woman-take-photo-fuji-mountains-autumn-japan-travel-concept_335224-9.jpg?t=st=1734108373~exp=1734111973~hmac=e83dd1c2f82713961cffa5f95c32d0a03069469960b92fa31c135d71bcdef9f2&w=996",

    desc: "Best destination for traveling in the world-Paris,France,Kyoto ,japan,National parks ,cape Town ,South Africa  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?",
  },
  {
    category: "travel",
    id: 8,
    title: "Travel Tips for Solo Adventurers",
    author: "Laura Black",
    date: "2024-05-23",
    url: "https://img.freepik.com/premium-photo/plane-passport-money-camera-note-pad-with-text-travel-tips-binoculars-jeans-watch-flip-flops-wallet_656538-3568.jpg?w=996",
    desc: "Embark on unforgettable journeys and explore the beauty of the world, one destination at a time Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?",
  },
  {
    category: "food",
    id: 9,
    title: "Delicious Vegan Recipes for summer",
    author: "Jessica Blue",
    date: "2024-05-31",
    url: "https://reciperunner.com/wp-content/uploads/2020/09/Southwest-Ground-Beef-Sweet-Potato-Skillet-Photograph-680x992.jpg",

    desc: "Savor the flavors of culinary excellence with dishes crafted to delight your taste buds. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?",
  },
  {
    category: "food",
    id: 10,
    title: "What is lasagna soupexactly ",
    author: "pratap suryawanshi",
    date: "2024-06-1",
    url: "https://img.freepik.com/premium-vector/healthy-food-young-man-poster_18591-24498.jpg?w=740",
    desc: "Primarily in-house developed recipes with seasonal ingredients, along with an archives of over 30 years’ worth of old family recipes Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? ",
  },
];

const BlogHome = () => {
  const [click, setClick] = useState(false);
  const [items, setItems] = useState(blogData);

  const togglemodeDropdown = () => {
    setClick(!click);
  };

  const categoryBlog = (category) => {
    if (category === "All") {
      setItems(blogData);
    } else {
      const filteredData = blogData.filter(
        (blog) => blog.category.toLowerCase() === category.toLowerCase()
      );
      setItems(filteredData);
    }
  };

  //only popular  categories
  const popularBlogs = blogData.filter(blog => blog.category === 'popular');

  console.log(popularBlogs);
  
 

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
                onClick={() => setItems(blogData)}
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
                      {blog.category}
                    </h3>
                    <h5 className="text-xs md:text-sm font-bold ">
                      {blog.title}
                    </h5>
                  
                    <Link to={`/singlepage/${blog.id}`}>
                 {/* <p className="text-xs md:text-sm text-gray-700 mt-4 ">
                      {blog.desc}
                    </p> */}
                    <div className=" items-center gap-4 mt-4 text-sm text-gray-500">
                      <span className="text-xs md:text-sm">{blog.author}</span>{" "}
                      <br />
                      <span className="text-xs md:text-sm">{blog.date}</span>
                    </div>
                    </Link>
                  </div>

                  {/* Right Image */}
                  
                  <div className=" md:w-1/3 flex justify-end ">
  <Link to={`/singlepage/${blog.id}`}> 
    <img
      src={blog.url}
      alt={blog.title}
      className="w-[500px] h-[200px] sm:w-[500px] sm:h-[200px] object-cover p-2"
    />
  </Link>
</div>

                  
                </div>
              ))}
          </div>
          
        </div>

        {/* Right Column */}
        <div className=" bg-white rounded  w-[180px] h-[230px] hidden lg:block  "> 
         {
          popularBlogs.map((blogs)=>{
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
      
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
