<?php
require 'config/db.php';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$stmt = $conn->prepare(
    "INSERT INTO contact_messages (name, email, phone, message)
     VALUES (?, ?, ?, ?)"
);

$stmt->bind_param("ssss", $name, $email, $phone, $message);
$stmt->execute();

header("Location: contact.html?success=1");
?>
