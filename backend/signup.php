<?php
include('connection.php');


$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

$check_username = $mysqli->prepare('select user_name from users where user_name=?');
$check_username->bind_param('s', $username);
$check_username->execute();
$check_username->store_result();
$username_exists = $check_username->num_rows();

if ($username_exists == 0) {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $query = $mysqli->prepare('insert into users(user_name,user_password,user_email) values(?,?,?)');
    $query->bind_param('sss', $username, $hashed_password, $email);
    $query->execute();

    $response['status'] = "success";
    $response['message'] = "another message in success";
} else {
    $response['status'] = "failed";
    $response['message'] = "another message in fail";
}

// types of http request : POST,GET,PUT,DELETE 
echo json_encode($response);
