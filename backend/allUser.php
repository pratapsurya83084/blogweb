<?php
ob_start();
header("Content-Type: application/json");

include_once('config/dbconnect.php'); // Include database connection

// echo json_encode(["name"=>"fj","huhhu"]);

$sql = "SELECT * FROM user";
$result = $conn->query($sql);

$users = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
    echo json_encode([
        "users"=>$users,
        "success"=>true
    ]); // Return data as JSON
} else {
    echo json_encode([
"message" => "No users found",
"success" => false
]); // Return error message as JSON
}

$conn->close(); // Close the database connection
ob_end_flush();
?>