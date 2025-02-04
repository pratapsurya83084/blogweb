<?php
header("Content-Type: application/json");
include_once('config/dbconnect.php');

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['id'])) {
    echo json_encode(["error" => "ID not received"]);
    exit;
}

$id = intval($data['id']); // Convert to integer for safety

$sql = "DELETE FROM user WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode(["success user deleted" =>$id ,"success"=> true]);
} else {
    echo json_encode(["message"=>"failed user deleted","success" => false, "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
