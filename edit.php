<?php
//including db.php file for database connection
include "db.php";

//getting a data that is releted to id which we send by ajax while we click on button using on index.php
$q = "SELECT * FROM details WHERE id=" . $_POST['id'];

//execute query
$rst = $conn->query($q);

//checking result is more than 0 or not
if ($rst->num_rows > 0) {
    //looping data
    while ($row = $rst->fetch_assoc()) {
        //echo data into json data that we can parse into object in js
        echo json_encode($row);
    }
}
