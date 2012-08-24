jQuery(document).ready(function($){
	// registration field hints javascript by Jack July 2012
	$(".registration_field").hover(function(){
		$(this).popover('show');
	});
	
	// registration form javascript validation by Jack July 2012
	$("#registerForm").validate({
	    	
		rules: {
			
		    user_name: {
		    	required: true,
		    	minlength: 4
		    },
		    
		    user_email: {
				required: true,
				email: true
			},
		    
			user_password: {
				required: true,
				minlength: 6
			},
			
			user_cpassword: {
				required: true,
				equalTo: "#user_password"
			},
			
			user_address: {
				required: true
			},
			
			user_city: {
				required: true
			},
			
			user_state: {
				required: true
			},
			
			user_zip: {
				required: true
			},
			
			user_telephone: {
				required: true
			}
			
			
		},
		
		messages: {
			
			user_name: {
				required: "Please enter a username",
				minlength: "Your username must consist of at least 4 characters"
			},
			
			user_email: {
				required: "Please enter your email address",
				email: "Enter a valid email address"
			},
			
			user_password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 6 characters long"
			},
			
			user_cpassword: {
				required: "Please enter confirm password",
				equalTo: "Password and Confirm Password must match"
			},
			
			user_address: {
				required: "Please enter address"
			},
			
			user_city: {
				required: "Please enter city"
			},
			
			user_state: {
				required: "Please enter state"
			},
			
			user_zip: {
				required: "Please enter zip"
			},
			
			user_telephone: {
				required: "Please enter telephone"
			}
		},
		
		errorClass: "help-inline registration_error",
		errorElement: "span",
		
		highlight: function(element, errorClass, validClass){
			/*$(element).parents('.control-group').removeClass('success');*/
			$(element).parents('.control-group').addClass('error');
		},
		
		unhighlight: function(element, errorClass, validClass){
			$(element).parents('.control-group').removeClass('error');
			/*$(element).parents('.control-group').addClass('success');*/
		}
		
		
	});

});