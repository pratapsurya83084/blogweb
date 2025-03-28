<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173"); // Allow requests from your frontend's origin
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Allow POST and OPTIONS methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow these headers
header("Access-Control-Allow-Credentials: true");
$servername = "localhost"; // Your database host, usually localhost
$username = "root"; // Your database username
$password = ""; // Default for XAMPP
$dbname = "blog-webapp"; // Your database name
$port = 3307; 
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname,$port);

// Check connection
if ($conn->connect_error) {
    // If there's a connection error, return a JSON response with the error message
    die(($conn->connect_error));
     // Exit the script if connection fails
} 

?>
