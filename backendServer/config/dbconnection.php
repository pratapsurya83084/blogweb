<?php


// Allow requests from all origins (you can specify your frontend's origin if needed)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Allow necessary methods
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With"); // Allow headers that are necessary


$servername = "localhost"; // Or 'localhost'
$username = "root";
$password = ""; // Default for XAMPP
$dbname = "blog-webapp"; // Replace with your database name


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn) {
    echo "...............Connected successfully.............";
    
} 
else {
    die("Connection failed: ");
}



?>





