<?php

$servername = "localhost"; // Your database host, usually localhost
$username = "root"; // Your database username
$password = ""; // Default for XAMPP
$dbname = "blog-webapp"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // If there's a connection error, return a JSON response with the error message
    die(($conn->connect_error));
     // Exit the script if connection fails
} 

?>
