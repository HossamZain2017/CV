$(document).ready(function() {
	
	//date&timer picker
	$('.date-from').datetimepicker({
		onClose: function( selectedDate ) {
        $( ".date-to" ).datepicker( "option", "minDate", selectedDate );
      }
	});

	$('.date-to').datetimepicker({
		onClose: function( selectedDate ) {
        $( ".date-from" ).datepicker( "option", "maxDate", selectedDate );
      }
	});



	//Multi modals
	$('modal').on('shown.bs.modal', function (e) {
	  	var backDrop = $('.modal-backdrop');
	  	
	})

	
});