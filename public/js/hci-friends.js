

'use strict';

var answers = {};
var opt_a = [];

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
	$("#q2").hide();
	$("#q3").hide();
	$("#q4").hide();
	
	$('#q1 .fun').click(function(event){
		event.preventDefault();
		console.log("Item Selected");
		opt_a = $(this).text();
		console.log(opt_a);
		answers.q1 = opt_a;
		console.log(answers);
		$("#q1").hide();
		$("#q2").show();

		woopra.track("a_version_click_q1");
	});

	$('#q2 .fun').click(function(event){
		event.preventDefault();
		console.log("Item Selected");
		opt_a = $(this).text();
		console.log(opt_a);
		answers.q2 = opt_a;
		console.log(answers);
		$("#q2").hide();
		$("#q3").show();

		woopra.track("a_version_click_q2");
	});

	$('#q3 .fun').click(function(event){
		event.preventDefault();
		console.log("Item Selected");
		opt_a = $(this).text();
		console.log(opt_a);
		answers.q3 = opt_a;
		console.log(answers);
		$("#q3").hide();
		$("#q4").show();

		woopra.track("a_version_click_q3");
	});

	$('#q4 .fun').click(function(event){
		event.preventDefault();
		console.log("Item Selected");
		opt_a = $(this).text();
		console.log(opt_a);
		answers.q4 = opt_a;
		console.log(answers);
		$("#q4").hide();

		woopra.track("a_version_click_q4");
	});
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.opt_a').hide();
	$('.sug').hide();
	$('#q1').show();
	console.log("Javascript connected!");
	var strring = '#s'+Math.floor((Math.random() * 5) + 1);
	console.log( strring);
	$(strring).show();
}
