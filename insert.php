<?php
//including db.php file for database connection
include 'db.php';

//query to insert data
$query = "INSERT INTO details(name, address, phone) VALUES(?,?,?)";

//prepare statement
$stmt = $conn->prepare($query);

//binding parameter with string
$stmt->bind_param('sss', $_POST['name'], $_POST['address'], $_POST['phone']);

//execute 
if ($stmt->execute()) {
    echo "Data Added";
} else {
    echo "Error Occured";
}
