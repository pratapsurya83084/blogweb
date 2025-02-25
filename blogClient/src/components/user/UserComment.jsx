import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
const UserComment = () => {
  const [comment, setComment] = useState("");


  const { id } = useParams();
  const blogId = Number(id); 
const userId=localStorage.getItem("user_id");

  const submitComment = async () => {
    if (!comment.trim()) {
      alert("Comment cannot be empty!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost/blogweb/backend/user_blog_comment.php",
        {
          post_id: blogId,
          user_id: userId,
          user_comment: comment,
        }
      );

      console.log(response.data);
      

      if (response.data.success) {
        alert("Comment added successfully!");
        setComment(""); // Clear input after submission
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">

    <div>
        show here comment ..... forEach  with username and  time date and textcomment
    </div>
      <h2 className="text-lg font-semibold mb-2">Leave a Comment</h2>
      <textarea
        className="w-full border border-gray-300 p-2 rounded-md"
        rows="3"
        placeholder="Write your comment here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button
        onClick={submitComment}
        className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Submit Comment
      </button>
    </div>
  );
};

export default UserComment;
