<?php 

include("db.php");

if (isset($_POST['save_task'])){
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $username = $_POST['username'];
    $gmail = $_POST['gmail'];
    $pass = $_POST['pass'];


    $query = "INSERT INTO users(fname, lname, username, gmail, pass) VALUES ('$fname', '$lname', '$username', '$gmail','$pass')";
    $result = mysqli_query($conn, $query);

    if(!$result) {
        die("QUERY FAILED");
    }
    echo 'saved';

    $_SESSION['message'] = "Task saved Succesfully";
    $_SESSION['message_type'] = 'success';

    header("location: index.php");
}
?>