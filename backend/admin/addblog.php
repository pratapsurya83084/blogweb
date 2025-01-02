<?php
ob_start();
header("Content-Type: application/json"); 
include_once('../config/dbconnect.php');

// Get input from frontend
$data = json_decode(file_get_contents('php://input'), true);
// Assign data to variables
$title = $data['blog_title'];
$subtitle = $data['blog_subtitle'];
$blog_category = $data['blog_category'];
$blog_content = $data['blog_content'];
$blog_author = $data['blog_author'];
$blog_post_date = $data['blog_post_date'];
$blog_poster_img=$data['blog_poster_img'];
$blog_img=$data['blog_img'];
// echo json_encode($data);
// echo json_encode($data[$blog_post_date]);

// Assuming you are uploading files, you would handle them here as well
$blog_poster_img = $data['blog_poster_img'];  // This will be a file, handle it accordingly
$blog_img = $data['blog_img'];  // This will be a file, handle it accordingly

// MySQL Insert query
$sql = "INSERT INTO blog_post (blog_title, blog_subtitle, blog_category, blog_content, blog_author, blog_post_date, blog_poster_img, blog_img)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

// Prepare and bind
if ($stmt = $conn->prepare($sql)) {

    $stmt->bind_param("ssssssss", $title, $subtitle, $blog_category, $blog_content, $blog_author, $blog_post_date, $blog_poster_img, $blog_img);

    // Execute statement
    if ($stmt->execute()) {
        echo json_encode(["message" => "Blog post added successfully.","success"=>true,"blog"=>$data]);
    } else {
        echo json_encode(["message" => "Failed to add blog post.", "success"=>false]);
    }

    // Close statement
    $stmt->close();
} else {
    echo json_encode(["message" => "Failed to prepare SQL statement."]);
}

// Close connection
$conn->close();
ob_end_flush();

?>
