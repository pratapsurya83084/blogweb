<?php
ob_start();
header("Content-Type: application/json");

include_once('config/dbconnect.php'); // Include database connection

// Decode the incoming JSON data
$data = json_decode(file_get_contents("php://input"), true);

// Check if the required keys ('blog_id' and 'user_id') are present in the incoming request
if (isset($data['blog_id']) && isset($data['user_id'])) {
    $blog_id = intval($data['blog_id']);
    $user_id = intval($data['user_id']);

    // Prepare the DELETE query
    $query = 'DELETE FROM blog_saved WHERE blog_id = ? AND user_id = ?';
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ii", $blog_id, $user_id);

    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            echo json_encode([
                "status" => "success",
                "message" => "Post unsaved successfully.",
            ]);
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "Post not found or could not be unsaved.",
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Database error. Please try again later.",
        ]);
    }
} else {
    http_response_code(400); // Bad Request
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request. 'blog_id' and 'user_id' are required.",
    ]);
}

$conn->close(); // Close the database connection
ob_end_flush();
?>
