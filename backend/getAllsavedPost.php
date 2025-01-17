<?php
ob_start();
header("Content-Type: application/json");

include_once('config/dbconnect.php'); // Include database connection

try {
    // Query to fetch all records from the blog_saved table
    $query = "SELECT * FROM blog_saved";
    $stmt = $conn->prepare($query);

    if ($stmt->execute()) {
        $result = $stmt->get_result();
        
        // Initialize an array to store all rows
        $data = [];
        
        // Fetch all rows and add them to the data array
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        // Return all rows as a JSON response
        echo json_encode([
            "status" => "success",
            "message" => "Retrieved all saved blogs.",
            "data" => $data
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Error fetching saved blogs."
        ]);
    }
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => "Exception: " . $e->getMessage()
    ]);
}

$conn->close(); // Close the database connection
ob_end_flush();
