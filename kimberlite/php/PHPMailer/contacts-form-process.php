<?php
// Initialise variables Error and Recaptcha Variables
$errorMSG = "";
$result = "";
$secretKey = "";
$response = "";
$remoteIp = "";
$reCaptchaValidationUrl = "";
// Initialise Post variables
	$name = "";
	$email = "";
	$message = "";
	$action = "";
	$gtoken = "";
// Mail send variabes
		$email_to = "";
		$email_name = "";
		$email_subject = "";
		$email_message = "";
		$success = "";
		$mail = "";

//Only run when form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	
// Decode to incoming message string into variables
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	$action = $_POST["action"];
	$gtoken = $_POST["gtoken"];

// Check that the key data was received from the page - If not send an error code
if(empty($name) || empty($email) || empty($message) || empty($gtoken) || empty($action)) {
	$errorMSG = '11003';
}

// If the key data was received proceed with running the Query
if(!empty($name) && !empty($email) && !empty($message) && !empty($gtoken) && !empty($action)) {

// Set up the Recaptcha variabes for sending to Google
    $secretKey = '6LegWAceAAAAAIYnlhyRkbcGL3TG8vJtMuLw8v56';
    $response = $gtoken;     
    $remoteIp = $_SERVER['REMOTE_ADDR'];

// Send the request to Google with site secret key, token and the server address
	$reCaptchaValidationUrl = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$response&remoteip=$remoteIp");
	$result = json_decode($reCaptchaValidationUrl, TRUE);

// Check the results sent back by Google
// Success = The token was valid and from site
// Action = The action sent in the Java when requesting the token - Double check it is from site
// Score = The Google Spam score for the submission (0 - 10)
	if($result['success'] == false) {
		$errorMSG = '21001';
	}else 
	if($result['action'] !== $action) {
		$errorMSG = '21002';
	}else
	if($result['score'] <=4.0) {
		$errorMSG = '21003';
	}else
		// If there is no Google Recaptcha error - proceed
	if($result['success'] == true && $result['action'] == $action && $result['score'] >= 4.0) {	

// Construct the HTML message content
			$email_to = 'ianlavender@kimbertoken.com';
			$email_name = 'Admin';
            $email_subject = 'KimberLite Website - Contact Page Submission';
            $email_message = "
				<html><body>
                <br><br><span style='font-family:Tahoma;font-size:14px'>The following message was received via the <strong>Website - Contacts Page</strong>.</span><br><br>
				<table style='width:600px'>
				<tr style='background: #eee;'><td style='height:35px; width:300px;font-family:Tahoma;font-size:14px'><strong>Name:</strong> </td><td style='height:25px; width:400px; font-family:Tahoma;font-size:14px'>" . strip_tags($_POST['name']) . "</td></tr>
				<tr style='background: #fff;'><td style='height:35px; width:300px;font-family:Tahoma;font-size:14px'><strong>Email:</strong> </td><td style='height:25px; width:400px; font-family:Tahoma;font-size:14px'>" . strip_tags($_POST['email']) . "</td></tr>
				<tr style='background: #eee;'><td style='height:35px; width:300px;font-family:Tahoma;font-size:14px'><strong>Message:</strong> </td><td style='height:25px; width:400px; font-family:Tahoma;font-size:14px'>" . strip_tags($_POST['message']) . "</td></tr>
				</table>
				</body></html>
            ";

	// Include the Mailer Script - Contains server settings / configuration
	require 'mailer.php';
		// Send the mail and check for errors
			try {
				$mail->send();
				$errorMSG = 'none';
				$success = 'sent';
				} catch (Exception $e) {
					$errorMSG = '51011';
				}
	}
}
}

// Construct the array to send back to the page	
$data[] = array("error" => $errorMSG,
				"mail" => $success);
				
// Encode the array into JSON format and echo back to the page
echo json_encode($data);

?>