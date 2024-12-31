<?php
ob_start();
header("Content-Type: application/json"); 
include_once('config/dbconnect.php');

// Input data taken from frontend
$data = json_decode(file_get_contents("php://input"), true);

// Extract email and password from the frontend request
$email = $data['email'];
$password = $data['password'];  // Assuming plain text password is sent

// Query to check if the email exists in the database
$query = "SELECT * FROM user WHERE email = ?";
$execute = $conn->prepare($query);

if ($execute) {
    // Bind the parameters (s for string)
    $execute->bind_param("s", $email);
    
    // Execute the query
    $execute->execute();
    
    // Get the result
    $result = $execute->get_result();

    // Check if the user exists and password matches
    if ($result->num_rows > 0) {
        // User found, now check if the password matches
        $user = $result->fetch_assoc();

        // Assuming password is stored hashed in the database
        if ($password==$user['password']) {
              // Start the session
    session_set_cookie_params(1800);  //expire in 30 min hours

            session_start();
            // set session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            setcookie("bloguser_id", session_id(), $_SESSION['user_id'], time() + 3600, '/', true);

            // Return success response with username and session ID or token
            echo json_encode([
                "message" => "User logged in successfully",
                "success" => true,
                "user" => $user['username'],
                "session_id" => session_id()  // Return session ID as a token-like string
            ]);
        } else {
            // Password incorrect
            echo json_encode([
                "message" => "Invalid password.",
                "success" => false
            ]);
        }
    } else {
        // User not found
        echo json_encode([
            "message" => "No user found with this email.",
            "success" => false
        ]);
    }
    
    // Close the statement
    $execute->close();
} else {
    // Query preparation failed
    echo json_encode([
        "message" => "An error occurred. Please try again.",
        "success" => false
    ]);
}

$conn->close();
ob_end_flush();
?>
