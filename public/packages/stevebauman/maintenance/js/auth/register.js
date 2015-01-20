// JavaScript Document
$(document).ready(function() {
	$(document).on('submit', '#maintenance-register', function(){
		var statusContainer = '#maintenance-register-status';
		
                var sArray = $(this).serialize();
		$.ajax({
			type: "POST",
			url: $(this).attr('action'),
			data: sArray,
			dataType: "json",
                        beforeSend: function(){
				showStatusMessage('Registering...', 'info', statusContainer);
			}
		}).done(function(result) {
			if(result.categoryCreated){
				if(result.messageType === 'success'){
					showStatusMessage(result.message, result.messageType, statusContainer);
				}
				
			} else{
				
				if(typeof result.message !== 'undefined'){
					showStatusMessage(result.message, result.messageType, statusContainer);
				} else if(typeof result.errors !== 'undefined'){
					showFormErrors(result.errors);
				}
			}
		});
               
		return false;
	});
});