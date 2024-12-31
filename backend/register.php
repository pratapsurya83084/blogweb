<?php
ob_start();
header("Content-Type: application/json"); // Set the response header to JSON

// Include the database connection
include_once('config/dbconnect.php'); 

// Get the POST data (ensure this is a POST request)
$data = json_decode(file_get_contents("php://input"), true);

// Extract username, email, and password from the request data
$username = $data['username'];
$email = $data['email'];
$password = $data['password'];  // It's better to hash the password before storing it in the database

// Check if the user already exists in the database
$query = "SELECT * FROM user WHERE email = '$email'";
$result = mysqli_query($conn, $query);

// Check if the user exists
if (mysqli_num_rows($result) > 0) {
    // If the user already exists, return an error response
    $response = array(
        "message" => "User already exists!",
        "code" => 200,
        "success" => false
    );
    echo json_encode($response);  // Send the response as JSON
} else {
    // If the user does not exist, insert the new user into the database
    $query = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
    
    // Prepare the SQL statement
    $stmt = $conn->prepare($query);
    
    // Check if the statement was prepared successfully
    if ($stmt) {
        // Bind parameters to the prepared statement
        $stmt->bind_param("sss", $username, $email, $password);
        
        // Execute the prepared statement
        if ($stmt->execute()) {
            // Send a success response if user was registered successfully
            $response = array(
                "message" => "User registered successfully",
                "code" => 200,
                "success" => true,
                "user" => $username
            );
            echo json_encode($response); // Send the response as JSON
        } else {
            // Send an error response if the registration failed
            $response = array(
                "message" => "Failed to register user.",
                "code" => 500,
                "success" => false
            );
            echo json_encode($response); // Send the response as JSON
        }
        
        $stmt->close();  // Close the statement
    } else {
        // Send an error response if there was an issue preparing the statement
        $response = array(
            "message" => "Error preparing registration query.",
            "code" => 500,
            "success" => false
        );
        echo json_encode($response); // Send the response as JSON
    }
}

$conn->close(); // Close the database connection
ob_end_flush(); // Flush the output buffer
?>
