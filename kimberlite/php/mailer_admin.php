<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
				require_once 'PHPMailer/Exception.php';
				require_once 'PHPMailer/PHPMailer.php';
				require_once 'PHPMailer/SMTP.php';

			// Passing `true` enables exceptions
				$mail = new PHPMailer(true);


					//Server settings
						$mail->SMTPDebug = 0;
						$mail->isSMTP();
						$mail->Host			= 'nl1-ts100.a2hosting.com';
						$mail->SMTPAuth 	= true;
						$mail->Username 	= "webmaster@kimbertoken.com";
						$mail->Password		= "pbfB61=EcvJ_eSULFC";

					//Recipients
						$mail->setFrom('webmaster@kimbertoken.com', 'KimberLite Website');
						$mail->addAddress($email_to, $email_name);
						$mail->addReplyTo('webmaster@kimbertoken.com', 'KimberLite Website');
	
					// Content
						$mail->isHTML(true);
						$mail->Subject = $email_subject;
						$mail->Body    = $email_message;
						$mail->WordWrap = 50;
?>