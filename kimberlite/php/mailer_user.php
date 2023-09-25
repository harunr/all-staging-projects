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
				$mail_user = new PHPMailer(true);


					//Server settings
						$mail_user->SMTPDebug = 0;
						$mail_user->isSMTP();
						$mail_user->Host		= 'nl1-ts100.a2hosting.com';
						$mail_user->SMTPAuth 	= true;
						$mail_user->Username 	= "webmaster@kimbertoken.com";
						$mail_user->Password	= "pbfB61=EcvJ_eSULFC";

					//Recipients
						$mail_user->setFrom('support@kimbertoken.com', 'Support Team');
						$mail_user->addAddress($user_email_to, $user_email_name);
						$mail_user->addReplyTo('support@kimbertoken.com', 'Support Team');
	
					// Content
						$mail_user->isHTML(true);
						$mail_user->Subject = $user_email_subject;
						$mail_user->Body    = $user_email_message;
						$mail_user->WordWrap = 50;
?>