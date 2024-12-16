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
    url: "https://imageio.forbes.com/specials-images/imageserve/646b09c56ffa41bec1a2e237/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    desc: " Achieve the perfect harmony between career and personal life with tips Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?",
  },
  {
    category: "technology",
    id: 2,
    title: "In 2025 Top 10 most valuable technology",
    author: "John Doe",
    date: "2024-05-25",
    url: "https://imageio.forbes.com/specials-images/imageserve/646b09c56ffa41bec1a2e237/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    desc: " Achieve the perfect harmony between career and personal life with tips Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet?",
  },
  {
    category: "shopping",
    id: 3,
    title: "Top 10 Gadgets 2024",
    author: "Emily Johnson",
    date: "2024-05-28",
    url: "https://img.freepik.com/premium-photo/free-shipping-day-deals_1198081-25241.jpg?w=996",
    desc: "Stay updated with the latest trends, must-have products, and shopping tips to elevate your style and lifestyle Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, similique distinctio mollitia eum quidem dolorem fugit exercitationem velit. Animi consectetur ipsum explicabo voluptatem quo commodi possimus necessitatibus praesentium voluptate eveniet? ",
  },

  {
    category: "health",
    id: 4,
    title: "nature",
    author: "Michael Brown",
    date: "2024-05-26",
    url: "https://img.freepik.com/free-photo/nutrition-healthy-diet-plan-concept_53876-125014.jpg?t=st=1734108211~exp=1734111811~hmac=394a3a8d5538eb09681a74bd5a31c3294de1068a569ef704be2957cecba551ed&w=996",
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
            <Link to={"/about"}>
              {" "}
              <li className="p-2 ">About Us</li>{" "}
            </Link>
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
                  
                  <div className="md:w-1/3">
                  <Link to={`/singlepage/${blog.id}`}> 
                    <img
                      src={blog.url}
                      alt={blog.title}
                      className="w-[500px] h-40  sm:w-[500px] object-cover p-2"
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
