$( document ).ready(function() {
    console.log( "ready!" );

    	if ($('#popup')) {
			setTimeout(show_pop, 15e3);
			function show_pop(){
				$('#popup').fadeIn(900);
			}
			function close_pop() {
				$('#popup').fadeOut(900);
			}
			$('#close_pop').on('click', close_pop);
			$('#close_pop2').on('click', close_pop);
	}

});