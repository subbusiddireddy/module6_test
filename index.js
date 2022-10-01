let globalIsSubmit = false;
function validate(isSubmit) {
	if(isSubmit) {
		globalIsSubmit = true
	}
    
    let firstName = document.getElementById('first-name').value;
	let lastName = document.getElementById('last-name').value;
	let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm-password').value;
    let tnC = document.getElementById('t-and-c').checked;
    let error = false;
    if(globalIsSubmit) {
		if(firstName.length >= 3) {
			document.getElementById('first-name-valid').style.display = 'block'
			document.getElementById('first-name-invalid').style.display = 'none'
		} else {
            error = true;
			document.getElementById('first-name-invalid').style.display = 'block'
			document.getElementById('first-name-valid').style.display = 'none'
		}
        if(lastName.length >= 3) {
			document.getElementById('last-name-valid').style.display = 'block'
			document.getElementById('last-name-invalid').style.display = 'none'
		} else {
            error = true;
			document.getElementById('last-name-invalid').style.display = 'block'
			document.getElementById('last-name-valid').style.display = 'none'
		}
        if (
            email.length >0 &&
			email.includes("@") && 
			email.includes(".") && 
			email.indexOf("@") > 0 &&
			email.substr(email.lastIndexOf('.') + 1).length >= 2
		)
        {
            document.getElementById("email-valid").style.display = "block";
			document.getElementById("email-invalid").style.display = "none";
        }
        else {
            error = true;
			document.getElementById("email-invalid").style.display = "block";
			document.getElementById("email-valid").style.display = "none";
		}
        if(password.length >=8 &&
            (password.includes('$') || password.includes('#') || password.includes('@')  ) &&


            ((password.includes('1') || password.includes('2') || password.includes('3') ||
            password.includes('4') || password.includes('5') || password.includes('6')  ||
            password.includes('7') || password.includes('8') || password.includes('9')  ) ) ) 
          
        {
            document.getElementById("password-valid").style.display = "block";
			document.getElementById("password-invalid").style.display = "none";
        }
        else{
            error = true;
            document.getElementById("password-valid").style.display = "none";
			document.getElementById("password-invalid").style.display = "block";
        }
    }   
    
    if(confirm_password === password && confirm_password.length >= 8)
    {
        document.getElementById("confirm-password-valid").style.display = "block";
        document.getElementById("confirm-password-invalid").style.display = "none"; 
    }
    else
    {
        error = true;
        document.getElementById("confirm-password-valid").style.display = "none";
        document.getElementById("confirm-password-invalid").style.display = "block";
    }
    if(tnC) {
        document.getElementById("tNC-invalid").style.display = "none"
    } else {
        error = true;
        document.getElementById("tNC-invalid").style.display = "block"
    }
    if(!error) {
        alert ('Your details have been saved successfully!')
        resetFields()
      }

      function resetFields () {
        document.getElementById('registration-form').reset();
        document.getElementById('first-name-valid').style.display = 'none';
        document.getElementById('last-name-valid').style.display = 'none';
        document.getElementById('email-valid').style.display = 'none';
        document.getElementById('password-valid').style.display = 'none';
      document.getElementById('confirm-password-valid').style.display = 'none';
        document.getElementById('tNC-invalid').style.display = 'none';
      
    
    }
    
}