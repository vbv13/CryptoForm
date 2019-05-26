function validateEmail() {
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        return false;
    }
    else if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        producePrompt(' Wrong email address format', 'emailPrompt', 'red');
        return false;
    }

    producePrompt('Valid email', 'emailPrompt', 'green');
    return true;
}

function validateIpAddress() {
    let ipAddress = document.getElementById('ipAddress').value;

    if(ipAddress == 0) {
        return false;
    }

    else if(!ipAddress.match(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)) {
        producePrompt(' Wrong IP address format', 'ipAddressPrompt', 'red');
        return false;
    }

    producePrompt('Valid IP address format', 'ipAddressPrompt', 'green');
    return true;
}

$(document).ready(function(){
$( ".formInput" ).keyup(function() {    //toShowSubmitButton
    let inputName = document.getElementById('nickname').value;

    if(validateEmail() && validateIpAddress() && inputName.length !== 0){
          $('#button').show()
    } else {
        $('#button').hide()
    }
  });
});

function producePrompt(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}

form.addEventListener('submit', function(e) {
    event.preventDefault();
    
})


