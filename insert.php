<?php 
    $serverName = "localhost";
    $userName = "root";
    $pasword = "";
    $dbName = "s_crud";

    $con =mysqli_connect($serverName, $userName, $pasword, $dbName);

    if(!$con){
        echo "Database not connected";
    }

    else{
        $fname = $_POST['fName'];
        $lName = $_POST['lName'];
        $email = $_POST['email'];
        $phone = $_POST['phoneNumber'];
        $address = $_POST['address'];

        $sql = "INSERT INTO student(first_name, last_name, email, phone, address) VALUE('$fname', '$lName', '$email', '$phone', '$address')";

        
        if(mysqli_query($con, $sql))
        {
            echo "Data Successfully Inserted";
        }

        else{
            echo "Data not inserted";
        }
    }
?>