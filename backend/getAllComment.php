<?php
ob_start();
header("Content-Type: application/json");

include_once('config/dbconnect.php');

$query = "SELECT * FROM user_comment ORDER BY id DESC"; // Fetch all comments
$result = $conn->query($query);

$comments = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $comments[] = $row;
    }
    echo json_encode(["success" => true, "comments" => $comments]);
} else {
    echo json_encode(["success" => false, "message" => "No comments found."]);
}





$conn->close(); // Close the database connection
ob_end_flush();
?>