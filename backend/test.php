<?php
ob_start();
header("Content-Type: application/json");
include_once('config/dbconnect.php'); // Ensure no output from this file

$data = json_decode(file_get_contents("php://input"), true);
$token = $data['username'] ?? 'unknown';
// echo($token);
// Construct a consistent JSON object
$response = [
    "message" => "Action processed successfully.",
    "success" => true,
    "additional_data" =>$token
];

// Return the JSON response
echo json_encode($response);
ob_end_flush();
?>
