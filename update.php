<?php

//including db.php file for database connection
include 'db.php';

// extract array into variable by using extract built in function
// how it work
// it convert index into a variable like $_POST['name'] will be $name or $_POST['address'] will be $address
extract($_POST);

//query to update data into our database
$q = "UPDATE details SET name='$name', address='$address', phone='$phone' WHERE id=" . $id;

//execute query
if ($conn->query($q)) {
    echo "Data Updated";
} else {
    echo "Unable to Update Data";
}
