<?php
ob_start();
header("Content-Type: application/json");

include_once('config/dbconnect.php'); // Include database connection

// Decode the incoming JSON data
$data = json_decode(file_get_contents("php://input"), true);

$user_id = $data['user_id'];
$blog_id = $data['blog_id'];

// Check if the blog is already saved for the user
$query = "SELECT * FROM blog_saved WHERE user_id = ? AND blog_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("ii", $user_id, $blog_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode([ 
        "status" => "exists","message" => "The blog is already saved.",
        "blog_id" => $blog_id
    ]);
} else {
    // Blog is not saved, proceed to save it
    $insertQuery = "INSERT INTO blog_saved (user_id, blog_id, saved_status) VALUES (?, ?, ?)";
    $saved_status = 1; // Assuming saved status is 1 for saved
    $stmtInsert = $conn->prepare($insertQuery);
    $stmtInsert->bind_param("iii", $user_id, $blog_id, $saved_status);

    if ($stmtInsert->execute()) {
    echo json_encode([
            'status' => 'success',
            'message' => 'Blog saved successfully!',
            'blog_id' => $blog_id,
            'user_id' => $user_id,
            'message'=>'saved'
        ]);
    } else {
     echo json_encode([
            'status' => 'error',
            'message' => 'Error saving the blog.'
        ]);
    }
}





$conn->close(); // Close the database connection
ob_end_flush();
?>