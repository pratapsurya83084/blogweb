import React, { useState } from "react";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaShareAlt,
  FaBookmark,
} from "react-icons/fa";
import { useParams,Link } from "react-router-dom";
import Layout from "../outlet/Layout";


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

const SinglePageBlog = () => {
  const { id } = useParams();
  const blogId = Number(id); // Convert to number
  const blogPost = blogData.find((post) => post.id === blogId);

  const catpost = blogData.filter(
    (blog) => blog.category.toLowerCase() === blogPost.category.toLowerCase()
  );

  if (!blogPost) {
    return <div className="text-center mt-10">Blog post not found!</div>;
  }

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => setLikes((prev) => prev + 1);
  const handleDislike = () => setDislikes((prev) => prev + 1);
  const handleSave = () => setIsSaved((prev) => !prev);

  return (
    <Layout>
    <div>
      <div className="relative w-full">
        <img
          src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-127416.jpg?t=st=1735503894~exp=1735507494~hmac=3b95acf94c4dfb89f33a94c95ef5363e1e83b3f91228cd437e7a6001efcf07c3&w=1060"
          alt="poster image"
          className="w-full h-auto max-h-[700px] object-cover"
        />
        <div className="absolute inset-0 text-black flex flex-col p-2 text-center justify-center items-center">
          <h1 className="text-2xl sm:text-5xl  md:text-5xl  font-bold mb-2 ">
            {" "}
            {blogPost.category} : {blogPost.title}
          </h1>
        </div>
      </div>

      <div className="mb-10 flex flex-col lg:flex-row justify-center items-start px-4 mt-10">
        {/* Main Blog Content */}

        <div className="max-w-2xl mb-10 bg-white shadow-lg rounded-lg p-6 text-left lg:w-2/3 lg:mr-8">
          {/* Poster with background image */}

          {/* Blog Content */}
          <div>
            <img
              src={blogPost.url}
              alt={blogPost.title}
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <h1 className="text-xl md:text-3xl font-bold mb-4 text-indigo-600">
              {blogPost.title}
            </h1>
            <p className="text-gray-500 text-sm mb-4">
              By <span className="font-semibold">{blogPost.author}</span> on{" "}
              {blogPost.date}
            </p>
            <p className="text-gray-700 text-sm  md:text-lg leading-relaxed">
              {blogPost.desc}
            </p>
            <div className="flex justify-start items-center gap-6 mt-6">
              <button
                className="flex items-center text-gray-700 hover:text-indigo-500"
                onClick={handleLike}
              >
                <FaThumbsUp className="mr-2" />
                <span>{likes}</span>
              </button>
              <button
                className="flex items-center text-gray-700 hover:text-red-500"
                onClick={handleDislike}
              >
                <FaThumbsDown className="mr-2" />
                <span>{dislikes}</span>
              </button>
              <button
                className="flex items-center text-gray-700 hover:text-green-500"
                onClick={() => alert("Share functionality coming soon!")}
              >
                <FaShareAlt className="mr-2" />
              </button>
              <button
                className={`flex items-center ${
                  isSaved ? "text-yellow-500" : "text-gray-700"
                } hover:text-yellow-500`}
                onClick={handleSave}
              >
                <FaBookmark className="mr-2" />
                <span>{isSaved ? "Saved" : "Save"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Blogs */}
        <div className="lg:w-1/3 mt-8 lg:mt-0 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold  mb-4">
            Related Blogs
          </h2>
          <div className="space-y-4">
            {/* Sample Related Blog Item */}
            {catpost.map((blog) => {
              return (
                <div
                  key={blog.id}
                  className="flex gap-5 bg-white p-4 shadow-lg rounded-lg w-full"
                >
                 <Link to={`/singlepage/${blog.id}`}>  <div>
                    <img src={blog.url} className="h-24 w-40" alt="" />
                  </div></Link>

                  <div>
                    <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                      {blog.category}
                    </h3>

                    <h3 className=" font-semibold  text-xs">{blog.title}</h3>
                    <p className="text-gray-500 text-sm">
                      By {blog.author} | {blog.date}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Add more related blogs here */}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default SinglePageBlog;
