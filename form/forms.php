<?php

$errorMSG = "";
if (empty($_POST["name"])) { $errorMSG = "Name is required "; } else { $name = $_POST["name"]; }
if (empty($_POST["email"])) { $errorMSG .= "Email is required "; } else { $email = $_POST["email"]; }
if (empty($_POST["phone"])) { $errorMSG .= "Phone is required "; } else { $email = $_POST["email"]; }
if (empty($_POST["message"])) { $errorMSG .= "Message is required "; } else { $message = $_POST["message"]; }

$EmailTo = "info@biothermsolutions.com";
$Subject = "Contact Form (biothermsolutions.com)";

$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

$success = mail($EmailTo, $Subject, $Body, "From:".$email);

if ($success && $errorMSG == ""){ echo "success";}	
else { 
	if($errorMSG == ""){ echo "Something went wrong :("; } 
	else { echo $errorMSG; }
	}

?>