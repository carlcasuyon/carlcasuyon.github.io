// IIFE - Immediately Invoked Function Expression
(function(yourcode) {

// The global jQuery object is passed as a parameter
	yourcode(window.jQuery, window, document);

}(function($, window, document) {

// The $ is now locally scoped 

// Listen for the jQuery ready event on the document
   $(function() { // The DOM is ready!
    

   	//--- Container Align Center
		var wr = $('#splash');
		setWindow(wr);

		$(window).resize(function() {
		 	setWindow(wr);
		});
		//--- Container Align Center


		//--- Container Align function
		function setWindow(con){
		   var div = $(con);
		   var height = $(window).height();
		   var width = $(window).width();
		    div.css({
		        'left' : width/2 - (div.width() / 2),  // half width - half element width
		        'top' : height/2 - (div.height() / 2), // similar
		        'z-index' : 15,                        // make sure element is on top
		    });
	}//--- Container Align function


	}); // The DOM is end!

// The rest of the code goes here!
}));