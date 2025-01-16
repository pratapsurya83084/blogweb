<?php
ob_start();
header("Content-Type: application/json");
include_once('config/dbconnect.php');

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['action']) && $data['action'] === "fetch_likes" && isset($data['user_id'])) {
    $user_id = $data['user_id'];

    // Fetch all likes by the user
    $query = "SELECT post_id, likes FROM blog_post_user_likes WHERE user_id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    $likes = [];
    while ($row = $result->fetch_assoc()) {
        $likes[] = $row;
    }

    echo json_encode(["success" => true, "likes" => $likes]);
} elseif (isset($data['post_id'], $data['user_id'])) {
    $post_id = $data['post_id'];
    $user_id = $data['user_id'];

    // Check if the user has already liked the post
    $checkQuery = "SELECT * FROM blog_post_user_likes WHERE post_id = ? AND user_id = ?";
    $stmt = $conn->prepare($checkQuery);
    $stmt->bind_param("ii", $post_id, $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // User has already liked the post, so remove the like
        $deleteQuery = "DELETE FROM blog_post_user_likes WHERE post_id = ? AND user_id = ?";
        $stmt = $conn->prepare($deleteQuery);
        $stmt->bind_param("ii", $post_id, $user_id);

        if ($stmt->execute()) {
            echo json_encode(["success" => false, "message" => "Like removed successfully", "like_status" => "removed"]);
        } else {
            echo json_encode(["success" => false, "message" => "Failed to remove like"]);
        }
    } else {
        // User has not liked the post, so add the like
        $insertQuery = "INSERT INTO blog_post_user_likes (post_id, user_id, likes) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($insertQuery);
        $likes = 'liked';
        $stmt->bind_param("iis", $post_id, $user_id, $likes);

        if ($stmt->execute()) {
            echo json_encode(["success" => true, "message" => "Like recorded successfully", "like_status" => "added"]);
        } else {
            echo json_encode(["success" => false, "message" => "Failed to record like"]);
        }
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
}

$conn->close(); // Close the database connection
ob_end_flush();
?>
