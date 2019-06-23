<?php

$conn = new mysqli('localhost', 'root', '', 'ajaxtodo');

if ($conn->connect_error) {
    die("Connection Failed");
}
