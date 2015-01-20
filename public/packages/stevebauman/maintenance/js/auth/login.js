// JavaScript Document
$(document).ready(function() {
	$(document).on('submit', '#maintenance-login', function(){
		var statusContainer = '#maintenance-login-status';
		
		$.ajax({
			type: "POST",
			url: $(this).attr('action'),
			data: {
                            "email" : $('input[name="email"]').val(), 
                            "password" : $('input[name="password"]').val(), 
                            "remember" : $('input[name="remember"]').val()
                        },
			dataType: "json",
			beforeSend: function(){
				showStatusMessage('Logging In...', 'info', statusContainer);
			}
		}).done(function(result) {
                        if(result.messageType === 'success'){
                            
                            window.setTimeout(function(){
                                    window.location.href = result.redirect;
                            }, 3000);
                            
                            showStatusMessage(result.message, result.messageType, statusContainer);
                            
                        } else if(typeof result.message !== 'undefined'){
                            
                            showStatusMessage(result.message, result.messageType, statusContainer);
                            
                        } else {
                            
                            showFormErrors(result.errors);
                            
                        }
		});
		
		return false;
	});
});