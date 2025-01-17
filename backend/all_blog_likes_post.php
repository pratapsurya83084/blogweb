<?php
ob_start();
header("Content-Type: application/json"); 
include_once ('config/dbconnect.php');

// MySQL Query to get all unique blog post user likes
$sql = "SELECT * FROM blog_post_user_likes";

// Execute the query
if ($result = $conn->query($sql)) {
    $Likes = [];
    
    // Fetch all unique blog post user likes
    while ($row = $result->fetch_assoc()) {
        $Likes[] = $row;
    }

    // Return the result as JSON
    echo json_encode(["success" => true, "Likes" => $Likes]);
} else {
    echo json_encode(["message" => "Failed to retrieve Likes posts.", "success" => false]);
}

// Close the connection
$conn->close();
ob_end_flush();
?>
