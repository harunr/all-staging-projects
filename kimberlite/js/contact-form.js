// Wait for Submit of the Newsletter - The validation is done in HTML and common-scripts.js
$(document).ready(function () {
    $('#contact-form').on('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();
        // Stop form data being filled in
        event.stopPropagation();
        // Hide the Submit button
        document.getElementById('contact-button').style.display = 'none';
        // Call the AJAX sending routine
        submitContact();
    });
})

//* ------------------------------------------------------------------------------- */
//*  Send Subscription to the Server and Receive Response
//* ------------------------------------------------------------------------------- */
function submitContact() {
    grecaptcha.ready(function () {
        $(':button').prop('disabled', true);
        // Request Recaptcha Token - The action type is used in the PHP token check
        grecaptcha.execute('6LegWAceAAAAAAM9IVz50K8FjoAWqr25JLvNUe4q', {
            action: 'contactform'
        }).then(function (token) {

            // Collect all the variables from the form fields
            var name = $("#name").val();
            var email = $("#mail").val();
            var phone = $("#number").val();
            var country = $("#selectCountry").val();
            var msg = $("#message").val();
            var action = 'contactform';
            var gtoken = token;

            // Post the data to the PHP processor using AJAX
            $.ajax({
                type: "POST",
                url: "php/common/contacts-form-process.php",
                cache: false,
                data: "name=" + name + "&email=" + email + "&phone=" + phone + "&country=" + country + "&msg=" + msg + "&action=" + action + "&gtoken=" + gtoken,
                // Check the message sent back from the PHP
                dataType: "json",
                // Check the message sent back from the PHP
                // Decode the JSON Array into variables
                success: function (data) {
                    var len = data.length;
                    for (var i = 0; i < len; i++) {
                        var error = data[i].error;
                        var result = data[i].result;
                    }
                    // Process the response
                    if (error == 'none' && result == 'success') {
                        resultContactProcess();
                    } else if (error > 10000 && error < 19999) {
                        connectContactError();
                    } else if (error > 20000 && error < 29999) {
                        recaptchaContactError();
                    } else if (error > 30000 && error < 39999) {
                        mailContactError();
                    }
                },
                // If there is a major error display an alert warning
                // Then automatically log the user out of the system
                error: function (jqXHR, exception) {
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
function resultContactProcess() {
    $(':button').prop('disabled', false);
    document.getElementById('success-msg-contact').style.display = 'inline-block';
    document.getElementById('success-msg-contact').innerText = "Thank You, we will contact you shortly.";
};

// wait 2 seconds before allowing next AJAX Submit
function submitContactReset() {
    document.getElementById('contact-button').style.display = 'inline-block';
    $(':button').prop('disabled', false);
};

//* ------------------------------------------------------------------------------- */
//* Standard Error Code Functions
//* ------------------------------------------------------------------------------- */
function connectContactError() {
    alert('Your Information was NOT Sent - Please Try Again');
    // wait 2 seconds before allowing next AJAX Submit
    setTimeout(submitContactReset, 2000);
};

function recaptchaContactError() {
    alert('Google Recaptcha Failed - Please Try Again');
    // wait 2 seconds before allowing next AJAX Submit
    setTimeout(submitContactReset, 2000);
};

function mailContactError() {
    alert('Sorry Your Message Was NOT Sent - Please Try Again');
    // wait 2 seconds before allowing next AJAX Submit
    setTimeout(submitContactReset, 2000);
};



//international telephone and country selector

if ($("select.styled-select").length) {
    // Start Contact Form
    var select = document.getElementById("selectCountry");
    var countries = new Array("Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe");

    //console.log(countries);
    //console.log(select);

    for (var i = 0; i < countries.length; i++) {

        var option = document.createElement("option");
        //for every turn of the loop create an option tag
        //console.log(option);
        var txt = document.createTextNode(countries[i]);
        //for every turn of the loop create the inner text
        //console.log(txt);
        option.appendChild(txt);
        //for every turn of the loop put the words from txt inside the <option> tags
        //console.log(option);
        option.setAttribute("value", countries[i]); //for every turn of the loop set the value attribute to corresponding country name
        //console.log(option);
        select.insertBefore(option, select.lastChild);
        //console.log(select);

    }

    document.addEventListener('DOMContentLoaded', function () {
        //console.log('DOM fully loaded and parsed');
        document.querySelector('select[name="selectCountry"]').onchange = alertCountry;
    }, false);

    function alertCountry(event) {
        //console.log('DOM loaded');
        //use "this" to refer to selected element
        if (!event.target.value) alert('Please select a country');
        else alert('You chose ' + event.target.value + '. Yay, grab a beer!');
    }

    $("select.styled-select").selectric({});
}

if ($('.tel-input').length) {
    var input = document.querySelector(".tel-input");
    window.intlTelInput(input, {
        // allowDropdown: false,
        //autoHideDialCode: true,
        autoInsertDialCode: true,
        // autoPlaceholder: "off",
        // dropdownContainer: document.body,
        // excludeCountries: ["uk"],
        //formatOnDisplay: false,
        geoIpLookup: function (callback) {
            $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
            });
        },
        // hiddenInput: "full_number",
        initialCountry: 'auto',
        // localizedCountries: { 'de': 'Deutschland' },
        nationalMode: false,
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        placeholderNumberType: "MOBILE",
        preferredCountries: ['gb', 'us', 'za'],
        // separateDialCode: true,
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js",
    });
}