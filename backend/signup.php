<?php
include('connection.php');


$username = $_POST['username'];
// $username=chris
// $password=chris1234
$password = $_POST['password'];

$check_username = $mysqli->prepare('select user_name from users where user_name=?');
$check_username->bind_param('s', $username);
$check_username->execute();
$check_username->store_result();
$username_exists = $check_username->num_rows();

if ($username_exists == 0) {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $query = $mysqli->prepare('insert into users(user_name,user_password) values(?,?)');
    $query->bind_param('ss', $username, $hashed_password);
    $query->execute();

    $response['status'] = "success";
    $response['message'] = "another message in success";
} else {
    $response['status'] = "failed";
    $response['message'] = "another message in fail";
}

// types of http request : POST,GET,PUT,DELETE 
echo json_encode($response);
