<?php
ob_start();
header("Content-Type: application/json"); 
include_once('config/dbconnect.php');

// Input data taken from frontend
$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$password = $data['password'];  
$query = "SELECT * FROM user WHERE email = ?";
$execute = $conn->prepare($query);

if ($execute) {
    // Bind the parameters (s for string)
    $execute->bind_param("s", $email);
    
    $execute->execute();
    $result = $execute->get_result();

    if ($result->num_rows > 0) {
       
        $user = $result->fetch_assoc();

       
        if ($password==$user['password']) {
              // Start the session
    session_set_cookie_params(1800);  //expire in 30 min hours

            session_start();
            // set session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            

            echo json_encode([
                "message" => "User logged in successfully",
                "success" => true,
                "user" => $user['username'],
                "session_id" => session_id()  //
            ]);
        } else {
            // Password incorrect
            echo json_encode([
                "message" => "Invalid password.",
                "success" => false
            ]);
        }
    } else {
        // Usser not found
        echo json_encode([
            "message" => "No user found with this email.",
            "success" => false
        ]);
    }
    
    $execute->close();
} else {
   
    echo json_encode([
        "message" => "An error occurred. Please try again.",
        "success" => false
    ]);
}

$conn->close();
ob_end_flush();
?>
