<?php
header("Content-Type: application/json");
require_once('config/dbconnection.php'); 

// Get input data from the request
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

if (empty($email) || empty($password)) {
    echo json_encode([
        "message" => "Email and Password are required",
        "success" => false
    ]);
    exit;
}

// Prepare the query to fetch the user by email
$query = "SELECT * FROM userregister WHERE email = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    // If no user is found with this email
    echo json_encode([
        "message" => "Invalid Email or Password",
        "success" => false
    ]);
    exit;
}

// Fetch the user record from the result
$user = $result->fetch_assoc();

// Verify the password against the stored hashed password
if (!password_verify($password, $user['password'])) {
    // If the password does not match
    echo json_encode([
        "message" => "Invalid Email or Password",
        "success" => false
    ]);
    exit;
}

// If login is successful, generate a token or session (here we are using a custom token)
$token = bin2hex(random_bytes(16));  // Generate a random token
$expiry = time() + (60 * 60);  // Token expiration in 1 hour

// Update the user's token and expiration time in the database (optional)
$updateQuery = "UPDATE userregister SET token = ?, token_expiry = ? WHERE id = ?";
$updateStmt = $conn->prepare($updateQuery);
$updateStmt->bind_param("ssi", $token, date('Y-m-d H:i:s', $expiry), $user['id']);
if (!$updateStmt->execute()) {
    echo json_encode([
        "message" => "Failed to generate token",
        "success" => false
    ]);
    exit;
}

// Send the response with the token
echo json_encode([
    "message" => "Login Successful",
    "success" => true,
    "token" => $token,
    "expires_in" => $expiry
]);

// Close the statement and connection
$stmt->close();
$conn->close();
?>
