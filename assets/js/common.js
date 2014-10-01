// IIFE - Immediately Invoked Function Expression
(function(yourcode) {

// The global jQuery object is passed as a parameter
	yourcode(window.jQuery, window, document);

}(function($, window, document) {

// The $ is now locally scoped 

// Listen for the jQuery ready event on the document
   $(function() { // The DOM is ready!
    
    $("#BSContainer").load("bs_bin/bs_content.html", function(){ // load brand store content


		alert("test");

	}); // The DOM is end!
// The rest of the code goes here!
}));