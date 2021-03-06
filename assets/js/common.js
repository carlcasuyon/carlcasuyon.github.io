// IIFE - Immediately Invoked Function Expression
(function(yourcode) {

// The global jQuery object is passed as a parameter
	yourcode(window.jQuery, window, document);

}(function($, window, document) {

// The $ is now locally scoped 

// Listen for the jQuery ready event on the document
   $(function() { // The DOM is ready!
    


/* -- IMAGES PRELOADER
$.fn.preload = function (fn) {
    var len = this.length, i = 0;
    return this.each(function () {
        var tmp = new Image, self = this;
        if (fn) tmp.onload = function () {
            fn.call(self, 100 * ++i / len, i === len);
        };
        tmp.src = this.src;
    });
};

$('img').preload(function(perc, done) {
    console.log(this, perc, done);
});*/


   	allset_height();
   	
	function allset_height() {
		var window_h = $( window ).height();
		console.log(window_h);
		$("#allset").css({
			height : window_h
		});
	}
	


   	//--- Container Align Center
		var wr = $('#splash');
		setWindow(wr);

		$(window).resize(function() {
		 	setWindow(wr);
		 	allset_height();
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

			console.log( height/2 )
		}//--- Container Align function


	}); // The DOM is end!

// The rest of the code goes here!
}));