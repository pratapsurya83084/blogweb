<?php
ob_start();
header("Content-Type: application/json"); 
include_once ('config/dbconnect.php');

// MySQL Query to get all blog posts
$sql = "SELECT * FROM blog_post";

// Execute the query
if ($result = $conn->query($sql)) {
    $blogs = [];
    
    // Fetch all blog posts
    while ($row = $result->fetch_assoc()) {
        $blogs[] = $row;
    }

    // Return the result as JSON
    echo json_encode(["success" => true, "blogs" => $blogs]);
} else {
    echo json_encode(["message" => "Failed to retrieve blog posts.", "success" => false]);
}

// Close the connection
$conn->close();
ob_end_flush();
?>
