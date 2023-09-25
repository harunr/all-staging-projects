// Wait for Submit of the Newsletter - The validation is done in HTML and common-scripts.js
$(document).ready(function() {
	$('#formnewsletter').on('submit', function(event){
			// Prevent the default form submission
		event.preventDefault();
			// Stop form data being filled in
		event.stopPropagation();
			// Hide the Submit button
		document.getElementById('newsletter-subscribe-button').style.display = 'none';
			// Call the AJAX sending routine
		submitNewsletter();
	});
})

//* ------------------------------------------------------------------------------- */
//*  Send Subscription to the Server and Receive Response
//* ------------------------------------------------------------------------------- */
function submitNewsletter(){
	grecaptcha.ready(function() {
		$(':button').prop('disabled', true); 
		// Request Recaptcha Token - The action type is used in the PHP token check
		grecaptcha.execute('6LegWAceAAAAAAM9IVz50K8FjoAWqr25JLvNUe4q', {action: 'subscribesubmit'}).then(function(token) {
			
			// Collect all the variables from the form fields
			var email = $("#newsletter").val();
			var action = 'subscribesubmit';
			var gtoken = token;

			// Post the data to the PHP processor using AJAX
			$.ajax({
				type: "POST",
				url: "php/common/subscribe-form-process.php",
				cache: false,
				data: "email=" + email + "&action=" + action + "&gtoken=" + gtoken,
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
									resultNewsProcess();
								} else if (error > 10000 && error < 19999) {
									connectNewsError();
								} else if (error > 20000 && error < 29999) {
									recaptchaNewsError();
								} else if (error > 30000 && error < 39999) {
									mailNewsError();
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
function resultNewsProcess(){
	$(':button').prop('disabled', false);
	document.getElementById('success-msg-newsletter').style.display = 'inline-block';
	document.getElementById('success-msg-newsletter').innerText = "Thank You";
};

// wait 2 seconds before allowing next AJAX Submit
function submitNewsReset(){ 
	document.getElementById('newsletter-subscribe-button').style.display = 'inline-block';
	$(':button').prop('disabled', false);
};

//* ------------------------------------------------------------------------------- */
//* Standard Error Code Functions
//* ------------------------------------------------------------------------------- */
function connectNewsError(){
	alert('Your Information was NOT Sent - Please Try Again');
		// wait 2 seconds before allowing next AJAX Submit
	setTimeout(submitNewsReset, 2000);
};

function recaptchaNewsError(){
	alert('Google Recaptcha Failed - Please Try Again');
		// wait 2 seconds before allowing next AJAX Submit
	setTimeout(submitNewsReset, 2000); 
};

function mailNewsError(){
	alert('Sorry Your Message Was NOT Sent - Please Try Again');
		// wait 2 seconds before allowing next AJAX Submit
	setTimeout(submitNewsReset, 2000);
};