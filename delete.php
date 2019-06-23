<?php
//including db.php file for database connection
include 'db.php';

//query to delete data from database by id that we send from index.php via ajax.js
$query = "DELETE FROM details WHERE id=" . $_POST['id'] . " LIMIT 1";

//execute query
if ($conn->query($query)) {
    echo "data Deleted";
} else {
    echo "Unable to Delete Data" . $conn->error;
}
