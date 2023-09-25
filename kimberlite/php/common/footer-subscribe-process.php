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
	$action = "";
	$gtoken = "";
// Mail send variables
		$email_to = "";
		$email_name = "";
		$email_subject = "";
		$email_message = "";
		$success = "";
		$mail = "";
// Contacts Database Variables
			$server_name = "";
			$server_user = "";
			$server_user_pass = "";
			$db_name = "";
			$db_connect = "";
			$email_query = "";
			$email_result = "";
			$type = "";
			$form_data_query = "";
			$form_data_result = "";
			$tele = "";
			$country = "";

//Only run when form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	
// Decode to incoming message string into variables
	$name = $_POST["name"];
	$email = $_POST["email"];
	$action = $_POST["action"];
	$gtoken = $_POST["gtoken"];

// Check that the key data was received from the page - If not send an error code
if(empty($name) || empty($email) || empty($gtoken) || empty($action)) {
	$errorMSG = '10004';
}

// If the key data was received proceed with running the Query
if(!empty($name) && !empty($email) && !empty($gtoken) && !empty($action)) {

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
		$errorMSG = '20001';
	}else 
	if($result['action'] !== $action) {
		$errorMSG = '20002';
	}else
	if($result['score'] <=0.2) {
		$errorMSG = '20003';
	}else
		// If there is no Google Recaptcha error - proceed
	if($result['success'] == true && $result['action'] == $action && $result['score'] >= 0.2) {

// Connect to the contacts database for saving the details
// Connection parameters for host database / table
$server_name = "localhost";
$server_user = "kimberto_mJPxraSruZKB4y4r";
$server_user_pass = "hkJulu54wy(qf+9,";
$db_name = "kimberto_xTRDgl9MSLCTORGD";

// Connect to the database
$db_connect = mysqli_connect($server_name, $server_user, $server_user_pass, $db_name);

// If connected to the Database run the Query
if ($db_connect) {
	
	// Check that the Email Address entered does not already exist in the Database
		$email_query = "SELECT * FROM kimber_contacts WHERE email='$email'";
		$email_result = mysqli_query($db_connect, $email_query);

		// If the email address does not exist in the Database - save the form details
		if(mysqli_num_rows($email_result) == 0){
			
			// Add the form details received to the database
			// Set type (form type) to contacts form
			$type = 'Footer Subscribe';
			$tele = 'Unknown';
			$country = 'Unknown';
			
			// Insert the form data to the contacts database
				$form_data_query = "INSERT kimber_contacts (name, email, telephone, country, type) VALUES ('$name', '$email', '$tele', '$country', '$type')";
				$form_data_result = mysqli_query($db_connect, $form_data_query);
						}
				}

// Construct the HTML message content
			$email_to = 'support@kimbertoken.com';
			$email_name = 'Admin';
            $email_subject = 'KimberLite Website - Newsletter Subscription';
            $email_message = "
				<html><body>
                <br><br><span style='font-family:Arial;font-size:14px'>The following person <strong>Subscribed</strong> to the Newsletter via the website</span><br><br>
				<table style='width:600px'>
				<tr style='background: #eee;'><td style='height:35px; width:200px;font-family:Arial;font-size:14px'><strong>Name:</strong> </td><td style='height:25px; width:400px; font-family:Tahoma;font-size:14px'>" . $name . "</td></tr>
				<tr style='background: #fff;'><td style='height:35px; width:200px;font-family:Arial;font-size:14px'><strong>Email Address:</strong> </td><td style='height:25px; width:400px; font-family:Tahoma;font-size:14px'>" . $email . "</td></tr></tr>
				</table>
				</body></html>
            ";

	// Include the Mailer Script - Contains server settings / configuration
	require_once '../mailer_admin.php';
		// Send the mail and check for errors
			try {
				$mail->send();
				$errorMSG = 'none';
				$success = 'success';
				} catch (Exception $e) {
					$errorMSG = '30002';
					$success = 'failed';
				}
				// Send the welcome email to the user 
				require 'welcome_email.php';
	}
}
}

// Construct the array to send back to the page	
$data[] = array("error" => $errorMSG,
				"result" => $success);
				
// Encode the array into JSON format and echo back to the page
echo json_encode($data);

?>