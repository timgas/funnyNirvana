<?php
$dbConnection = mysqli_connect('localhost', 'root', 'root', 'atm_store');
if (!$dbConnection) {
    echo 'Cannot connect to DB';
    exit();
}
?>