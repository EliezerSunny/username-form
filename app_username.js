// Document is ready 
$(document).ready(function () { 
  
    // Validate Username 
    $("#usercheck").hide();
    let usernameError = true; 
    $("#usernames").keyup(function () { 
        validateUsername(); 
    }); 
    
    let regexx =  
        /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  
    function validateUsername() { 
        let usernameValue = $("#usernames").val(); 
        if (usernameValue.length == "") { 
            $("#usercheck").show();
		$('#submitbtn').prop('disabled', true);
            usernameError = false; 
            return false; 
        } else if (usernameValue.length < 3 || usernameValue.length > 20) { 
            $("#usercheck").show();
	    $('#usernames').css('border-color', 'red');
		$('#submitbtn').prop('disabled', true);
            $("#usercheck").html("Username must be between 3 and 20 characters...");
	    $("#usercheckk").hide();
            usernameError = false; 
            return false; 
        }
      
        
     /* else if (!regexx.test(usernameValue)) { 
            $("#usercheck").show();
            $("#usercheck").html("You can't use this character for username.");
            usernameError = false; 
        }
        */
         
	    else if (usernameValue === 'Evil' || usernameValue === 'evil') {                                     $("#usercheck").show();
	     $('#usernames').css('border-color', 'red');
		    $('#submitbtn').prop('disabled', true);
	     $("#usercheck").html("Username already taken. Please try another one...");
	     $("#usercheckk").hide();
            usernameError = false;                            return false;
        }
	    else { 
            $("#usercheck").hide();
	    $("#usercheckk").show();
	    $('#usernames').css('border-color', 'green');
	    $("#usercheckk").html("Username is available.");
		    $('#submitbtn').prop('disabled', false);
        } 
    } 
  
    // Validate Email 
   /*  const email = document.getElementById("email"); 
    email.addEventListener("blur", () => { 
        let regex =  
        /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
        let s = email.value; 
        if (regex.test(s)) { 
            email.classList.remove("is-invalid"); 
            emailError = true; 
        } else { 
            email.classList.add("is-invalid"); 
            emailError = false; 
        } 
    }); 
  
    // Validate Password 
    $("#passcheck").hide(); 
    let passwordError = true; 
    $("#password").keyup(function () { 
        validatePassword(); 
    }); 
    function validatePassword() { 
        let passwordValue = $("#password").val(); 
        if (passwordValue.length == "") { 
            $("#passcheck").show(); 
            passwordError = false; 
            return false; 
        } 
        if (passwordValue.length < 3 || passwordValue.length > 10) { 
            $("#passcheck").show(); 
            $("#passcheck").html( 
                "**length of your password must be between 3 and 10"
            ); 
            $("#passcheck").css("color", "red"); 
            passwordError = false; 
            return false; 
        } else { 
            $("#passcheck").hide(); 
        } 
    } 
  
    // Validate Confirm Password 
    $("#conpasscheck").hide(); 
    let confirmPasswordError = true; 
    $("#conpassword").keyup(function () { 
        validateConfirmPassword(); 
    }); 
    function validateConfirmPassword() { 
        let confirmPasswordValue = $("#conpassword").val(); 
        let passwordValue = $("#password").val(); 
        if (passwordValue != confirmPasswordValue) { 
            $("#conpasscheck").show(); 
            $("#conpasscheck").html("**Password didn't Match"); 
            $("#conpasscheck").css("color", "red"); 
            confirmPasswordError = false; 
            return false; 
        } else { 
            $("#conpasscheck").hide(); 
        } 
    } 
  
    // Submit button 
    $("#submitbtn").click(function () { 
        validateUsername(); 
        validatePassword(); 
        validateConfirmPassword(); 
        validateEmail(); 
        if ( 
            usernameError == true && 
            passwordError == true && 
            confirmPasswordError == true && 
            emailError == true
        ) { 
            return true; 
        } else { 
            return false; 
        } 
    }); */ 
});
