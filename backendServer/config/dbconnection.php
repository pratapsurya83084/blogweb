<?php
// backend/register.php




// include_once 'dbConnection.php';

$servername = "localhost";
$username = "root"; // default username for XAMPP
$password = ""; // default password is empty for XAMPP
$dbname = "blogwebsite";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
// else {
//     echo "...............Connected successfully.............";
// }


// $method = $_SERVER['REQUEST_METHOD']; // Correct the typo here ('REQUEST_MEHTHOD' -> 'REQUEST_METHOD')

// switch ($method) {
//     case 'GET':
//         // Assuming $conn is your database connection
//         $alluser = mysqli_query($conn, "SELECT * FROM userregister"); // Added space between * and FROM

//         if (mysqli_num_rows($alluser) > 0) {
//             // Initialize an empty array to hold the data
//             $json_array = array();

//             // Fetch the data from the result set
//             while ($row = mysqli_fetch_array($alluser)) {
//                 // Populate the 'userData' array with user details
//                 $json_array["userData"][] = array(
//                     "id" => $row['id'],
//                     "username" => $row['username'],
//                     "email" => $row['email']
//                 );
//             }

//             // Return the data as a JSON response
//             echo json_encode($json_array);
//         } else {
//             // No records found
//             echo json_encode(array("message" => "No user found"));
//         }
//         break;

//     // Handle other HTTP methods (e.g., POST, PUT, DELETE) if necessary
//     default:
//         // Handle unsupported methods
//         echo json_encode(array("message" => "Method not allowed"));
//         break;
// }




// Ensure the request method is POST
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     // Get the input data from POST request
//     $username = mysqli_real_escape_string($conn, $_POST['username']);
//     $email = mysqli_real_escape_string($conn, $_POST['email']);
//     $password = mysqli_real_escape_string($conn, $_POST['password']);

//     // Hash the password before storing
//     $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

//     // Check if the user already exists
//     $sql = "SELECT * FROM users WHERE email = '$email'";
//     $result = $conn->query($sql);

//     if ($result->num_rows > 0) {
//         // If the user already exists, return an error
//         echo json_encode(["message" => "User already exists"]);
//     } else {
//         // Insert the new user into the database
//         $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashedPassword')";
//         if ($conn->query($sql) === TRUE) {
//             echo json_encode(["message" => "User registered successfully"]);
//         } else {
//             echo json_encode(["message" => "Error: " . $conn->error]);
//         }
//     }
// } else {
//     echo json_encode(["message" => "Invalid request method"]);
// }
