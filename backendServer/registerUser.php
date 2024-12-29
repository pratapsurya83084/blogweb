<?php
header("Content-Type: application/json");
// Include the database connection
include_once('config/dbconnection.php'); // Adjust path if needed

// Check if necessary POST data is received
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['username']) && isset($data['email']) && isset($data['password'])) {
    $username = $data['username'];
    $email = $data['email'];
    $password = password_hash($data['password'], PASSWORD_BCRYPT); // Hash the password

     $id=0+1;
    // Prepare and execute the SQL query
    $sql = "INSERT INTO userregister (id,username, email, password) VALUES ('$id','$username', '$email', '$password')";

 // Check if the email already exists
 $userexiste = "SELECT * FROM userregister WHERE email = '$email'";
 $result = mysqli_query($conn, $userexiste);

 // If user already exists
 if (mysqli_num_rows($result) > 0) {
    echo json_encode([
        "message" => "User already exists.",
        "code" => 409, // HTTP 409 Conflict
        "success" => false
    ]);
    exit();
 } else {
     // Hash the password
     $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

     // Insert the new user into the database
     $sql = "INSERT INTO userregister (username, email, password) VALUES ('$username', '$email', '$hashedPassword')";

     if (mysqli_query($conn, $sql)) {
         echo json_encode([
             "message" => "User registered successfully",
             "code" => 201, // HTTP 201 Created
             "success" => true
         ]);
     } else {
         echo json_encode([
             "message" => "Failed to register user",
             "code" => 500, // HTTP 500 Internal Server Error
             "success" => false
         ]);
     }
 }
} else {
 echo json_encode([
     "message" => "Please provide all required fields: username, email, password",
      "code" => 400, // HTTP 400 Bad Request
     "success" => false
 ]);
}
// Close the DB connection
mysqli_close($conn);
?>
