

'use strict';

var answers = {};
var opt_b = [];

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

	$('#q1 .fun').click(function(event){
		event.preventDefault();
		console.log("Item Selected");
		opt_b = $(this).text();
		console.log(opt_b);
		answers.q1 = opt_b;
		console.log(answers);
		$("#q1").hide();

		woopra.track("b_version_click_q1");
	});

	$('#q2 .fun').click(function(event){
		event.preventDefault();
		console.log("Item Selected");
		opt_b = $(this).text();
		console.log(opt_b);
		answers.q2 = opt_b;
		console.log(answers);
		$("#q2").hide();

		woopra.track("b_version_click_q2");
	});

	$('#q3 .fun').click(function(event){
		event.preventDefault();
		console.log("Item Selected");
		opt_b = $(this).text();
		console.log(opt_b);
		answers.q3 = opt_b;
		console.log(answers);
		$("#q3").hide();

		woopra.track("b_version_click_q3");
	});

	$('#q4 .fun').click(function(event){
		event.preventDefault();
		console.log("Item Selected");
		opt_b = $(this).text();
		console.log(opt_b);
		answers.q4 = opt_b;
		console.log(answers);
		$("#q4").hide();

		woopra.track("b_version_click_q4");
	});
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	var strring = '#s'+Math.floor((Math.random() * 5) + 1);
	console.log( strring);
	$(strring).show();
}
