<?php

include('config/dbconnection.php');


$method = $_SERVER['REQUEST_METHOD']; // Correct the typo here ('REQUEST_MEHTHOD' -> 'REQUEST_METHOD')

switch ($method) {
    case 'GET':
        // Assuming $conn is your database connection
        $alluser = mysqli_query($conn, "SELECT * FROM userregister"); // Added space between * and FROM

        if (mysqli_num_rows($alluser) > 0) {
            // Initialize an empty array to hold the data
            $json_array = array();

            // Fetch the data from the result set
            while ($row = mysqli_fetch_array($alluser)) {
                // Populate the 'userData' array with user details
                $json_array["userData"][] = array(
                    "id" => $row['id'],
                    "username" => $row['username'],
                    "email" => $row['email']
                );
            }

            // Return the data as a JSON response
            echo json_encode($json_array);
        } else {
            // No records found
            echo json_encode(array("message" => "No user found"));
        }
        break;

    // Handle other HTTP methods (e.g., POST, PUT, DELETE) if necessary
    default:
        // Handle unsupported methods
        echo json_encode(array("message" => "Method not allowed"));
        break;
}
?>