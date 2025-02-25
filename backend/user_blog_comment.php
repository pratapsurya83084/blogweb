<?php
ob_start();
header("Content-Type: application/json");

include_once('config/dbconnect.php'); // Include database connection

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['post_id']) && !empty($data['user_id']) && !empty($data['user_comment'])) {
    $post_id = $data['post_id'];
    $user_id = $data['user_id'];
    $user_comment = trim($data['user_comment']);

    // Prepare the SQL query
    $query = "INSERT INTO user_comment (post_id, user_id, user_comment) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("iis", $post_id, $user_id, $user_comment);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Comment added successfully!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to add comment."]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "All fields are required!"]);
}



$conn->close(); // Close the database connection
ob_end_flush();
?>