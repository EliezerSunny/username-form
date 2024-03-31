// Document is ready 
$(document).ready(function () { 
  
    // Validate Username 
    $("#usercheck").hide();
    $("#wordContainer").hide();
    $('#submitbtn').prop('disabled', true);
    let usernameError = true; 
    $("#usernames").keyup(function () { 
        validateUsername(); 
    }); 

  
    function validateUsername() { 
        let usernameValue = $("#usernames").val(); 
        if (usernameValue.length == "") { 
            $("#usercheck").show();
            $("#usercheckk").hide();
            $("#wordContainer").hide();
            $("#usercheck").html("Input can't be empty ");
		$('#submitbtn').prop('disabled', true);
            usernameError = false; 
            return false; 
        } else if (usernameValue.length < 3 || usernameValue.length > 20) { 
            $("#usercheck").show();
            $("#usercheckk").hide();
	    $('#usernames').css('border-color', 'red');
		$('#submitbtn').prop('disabled', true);
            $("#usercheck").html("Username must be between 3 and 20 characters...");
	    $("#wordContainer").hide();
            usernameError = false; 
            return false; 
        }
      
      
else if (usernameValue === 'Evil') {                                      
$("#usercheck").show();
$("#usercheckk").hide();
	     $('#usernames').css('border-color', 'red');
		    $('#submitbtn').prop('disabled', false);
	     $("#usercheck").html("Username already taken. ");
	     $("#wordContainer").show();
            usernameError = false;                            return false;
        }
        
        
	    else {                                     $("#usercheck").hide();
	    $("#usercheckk").show();
	    $('#usernames').css('border-color', 'green');
	    $("#usercheckk").html("Username is available.");
	    $("#wordContainer").hide();
		    $('#submitbtn').prop('disabled', false);
        }
    } 
  
    
});
