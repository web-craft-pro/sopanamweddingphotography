<?php
$conn = new mysqli("localhost", "root", "", "sopanam_wedding_studio");

if ($conn->connect_error) {
    die("Database connection failed");
}
?>
