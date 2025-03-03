import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ContextApp from "../context/ContextApp";
import Swal from "sweetalert2";
const UserComment = () => {
  const [comment, setComment] = useState("");
  const { AllComments } = useContext(ContextApp);
  const [alldisplayComments, SetAllDisplayComment] = useState([]);

  const { id } = useParams();
  const blogId = Number(id);
  const userId = localStorage.getItem("user_id");

  // Add comment API call
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
        Swal.fire({
          title: "Success!",
          text: "Comment Added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setComment(""); // Clear input after submission

        // Update the local state without reloading
        SetAllDisplayComment((prevComments) => [
          ...prevComments,
          { post_id: blogId, user_id: userId, user_comment: comment },
        ]);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Fetch all comments for the specific blog post
  useEffect(() => {
    if (AllComments) {
      const blog_post = AllComments.filter(
        (comment) => Number(comment.post_id) === blogId
      );
      SetAllDisplayComment(blog_post);
    }
  }, [AllComments, blogId]);

  return (
    <div className="max-w mx- p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-2">Comments</h2>

      {alldisplayComments.length > 0 ? (
        <ul>
          {alldisplayComments.map((comment, i) => (
            <li key={i} className="border-b py-2">
              <p className="text-indigo-600 font-bold">
                User {comment.user_id}:
              </p>
              <p className="text-gray-700">{comment.user_comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No comments yet.</p>
      )}

      <h2 className="text-lg font-semibold mt-4">Leave a Comment</h2>
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
