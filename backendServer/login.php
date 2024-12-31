<?php
header("Content-Type: application/json");

// Include the database connection
include_once('config/dbconnection.php'); // Adjust path if needed

// Get the JSON payload
$data = json_decode(file_get_contents("php://input"), true);

// Check if the required fields are provided
if (isset($data['email']) && isset($data['password'])) {
    $email = $data['email'];
    $password = $data['password'];

    // Prepare the SQL query to fetch user details
    $sql = "SELECT * FROM userregister WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if user exists
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify the hashed password
        if (password_verify($password, $user['password'])) {
            echo json_encode([
                "message" => "Login successful",
                "code" => 200, // HTTP 200 OK
                "success" => true,
                "user" => [
                    "id" => $user['id'],
                    "username" => $user['username'],
                    "email" => $user['email']
                ]
            ]);
        } else {
            // Invalid password
            echo json_encode([
                "message" => "Invalid password",
                "code" => 401, // HTTP 401 Unauthorized
                "success" => false
            ]);
        }
    } else {
        // User not found
        echo json_encode([
            "message" => "User not found",
            "code" => 404, // HTTP 404 Not Found
            "success" => false
        ]);
    }

    // Close the statement
    $stmt->close();
} else {
    // Missing required fields
    echo json_encode([
        "message" => "Please provide both email and password",
        "code" => 400, // HTTP 400 Bad Request
        "success" => false
    ]);
}

// Close the database connection
$conn->close();
?>
