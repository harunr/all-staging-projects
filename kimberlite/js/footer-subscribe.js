// Wait for Submit of the Newsletter - The validation is done in HTML and common-scripts.js
$(document).ready(function() {
	$('#footer-subscribe-form').on('submit', function(event){
			// Prevent the default form submission
		event.preventDefault();
			// Stop form data being filled in
		event.stopPropagation();
			// Hide the Submit button
		document.getElementById('subscribe-button').style.display = 'none';
			// Call the AJAX sending routine
		submitSubscribe();
	});
})

//* ------------------------------------------------------------------------------- */
//*  Send Subscription to the Server and Receive Response
//* ------------------------------------------------------------------------------- */
function submitSubscribe(){
	grecaptcha.ready(function() {
		$(':button').prop('disabled', true); 
		// Request Recaptcha Token - The action type is used in the PHP token check
		grecaptcha.execute('6LegWAceAAAAAAM9IVz50K8FjoAWqr25JLvNUe4q', {action: 'footersubscribe'}).then(function(token) {
			
			// Collect all the variables from the form fields
			var name = $("#subscribe_name").val();
			var email = $("#subscribe_email").val();
			var action = 'footersubscribe';
			var gtoken = token;

			// Post the data to the PHP processor using AJAX
			$.ajax({
				type: "POST",
				url: "php/common/footer-subscribe-process.php",
				cache: false,
				data: "name=" + name + "&email=" + email + "&action=" + action + "&gtoken=" + gtoken,
				// Check the message sent back from the PHP
				dataType: "json",
								// Check the message sent back from the PHP
								// Decode the JSON Array into variables
							success : function(data){
							var len = data.length;
							for(var i=0; i<len; i++){
							var error = data[i].error;
							var result = data[i].result;
							}
									// Process the response
								if (error == 'none' && result == 'success'){
									resultSubProcess();
								} else if (error > 10000 && error < 19999) {
									connectSubError();
								} else if (error > 20000 && error < 29999) {
									recaptchaSubError();
								} else if (error > 30000 && error < 39999) {
									mailSubError();
								}
						},
							// If there is a major error display an alert warning
							// Then automatically log the user out of the system
						error: function(jqXHR, exception) {
							if (jqXHR.status === 0) {
								alert('We could not connect to the server. Please check your Network Connection.');
								location.reload();
							} else if (jqXHR.status == 404) {
								alert('Requested page not found. [404]. Please try again');
								location.reload();
							} else if (jqXHR.status == 500) {
								alert('Internal Server Error [500]. Please try again');
								location.reload();
							} else if (exception === 'parsererror') {
								alert('The request failed. Please try again');
								location.reload();
							} else if (exception === 'timeout') {
								alert('The request timed out. Please try again');
								location.reload();
							} else if (exception === 'abort') {
								alert('The request was aborted. Please try again');
								location.reload();
							} else {
								alert('An error occurred. Please try again' + jqXHR.responseText);
								location.reload();
								}
						}
					});
					event.preventDefault();
					event.stopImmediatePropagation(); // To prevent more than one submission
					return false;
				});
			});
	}; 

// Success Function
function resultSubProcess(){
	$(':button').prop('disabled', false);
	document.getElementById('success-msg-subscribe').style.display = 'inline-block';
	document.getElementById('success-msg-subscribe').innerText = "Thank You";
};

// wait 2 seconds before allowing next AJAX Submit
function submitSubReset(){ 
	document.getElementById('subscribe-button').style.display = 'inline-block';
	$(':button').prop('disabled', false);
};

//* ------------------------------------------------------------------------------- */
//* Standard Error Code Functions
//* ------------------------------------------------------------------------------- */
function connectSubError(){
	alert('Your Information was NOT Sent - Please Try Again');
		// wait 2 seconds before allowing next AJAX Submit
	setTimeout(submitSubReset, 2000);
};

function recaptchaSubError(){
	alert('Google Recaptcha Failed - Please Try Again');
		// wait 2 seconds before allowing next AJAX Submit
	setTimeout(submitSubReset, 2000); 
};

function mailSubError(){
	alert('Sorry Your Message Was NOT Sent - Please Try Again');
		// wait 2 seconds before allowing next AJAX Submit
	setTimeout(submitSubReset, 2000);
};