<?php
ob_start();
header("Content-Type: application/json"); 
include_once('../config/dbconnect.php');


$data = json_decode(file_get_contents("php://input"), true);
// echo json_encode($data);
if (!isset($data['id'])) {
    echo json_encode(["error" => "ID not received"]);
    exit;
}

$id = intval($data['id']); // Convert to integer for safety

$sql = "DELETE FROM blog_post WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode(["success blog deleted" =>$id ,"success"=> true]);
} else {
    echo json_encode(["message"=>"failed blog deleted","success" => false, "error" => $stmt->error]);
}

// Close connection
$conn->close();
ob_end_flush();

?>