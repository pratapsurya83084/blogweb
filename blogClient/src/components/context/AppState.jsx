import React, { useEffect,useState } from "react";
import ContextApp from "../context/ContextApp"; // Import the created context
import axios from 'axios';


const AppState = ({ children }) => {
     const [blogs, setblogs] = useState();
     const [blogData, setFilteredBlogs] = useState([]);
//register user
const registerUser=async ({userData})=>{
    const response = await axios.post(
        "http://localhost/blogweb/backend/register.php", // URL to your backend
      
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            // "Accept": "application/json", 
          },
         
        }
      );
// console.log(response.data);
return response.data;
}

//login user
const loginUser=async(data)=>{
    try {
        //fetch api
        const api = await axios.post(
          "http://localhost/blogweb/backend/login.php",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(api.data.session_id);
     return api.data;
        
      } catch (error) {
        console.log("something  went wrong :", error);
      }
}


//home all blog display
const HomeBlogDisplay=async()=>{
        try {
          const response = await axios.get(
            "  http://localhost/blogweb/backend/allblogs.php"
          );
          // console.log(response.data)
          setblogs(response.data.blogs);
          setFilteredBlogs(response.data.blogs);
        } catch (error) {
          console.error("Error fetching blogs", error);
        }
}



useEffect(()=>{
    HomeBlogDisplay();
  
 },[]);



//blog_post like api 
const like_blog_post=async(post_id,user_id)=>{
  try {
    //fetch api
    const api = await axios.post(
      "http://localhost/blogweb/backend/like_blog_post.php",
      {post_id:post_id ,user_id:user_id} ,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(api.data);
     return api.data;
        
      } catch (error) {
        console.log("something  went wrong :", error);
      }
}



  return (
    <ContextApp.Provider value={{registerUser,loginUser,blogs,blogData,like_blog_post}}>
      {children}
    </ContextApp.Provider>
  );
};

export default AppState;
