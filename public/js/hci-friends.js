

'use strict';

var answers = {};

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

	
/*$('.fun').click(function(event){
	event.preventDefault();
	console.log("Item Selected");
	$(this).text("selected");
});*/

	// $(".version_a").click(function(){
 //    woopra.tack("a_version_click");
 //  	})

var opt = [];

$('#q1 .fun').click(function(event){
	event.preventDefault();
	console.log("Item Selected");
	opt = $(this).text();
	console.log(opt);
	answers.q1 = opt;
	console.log(answers);
	$("#q1").hide();
	$("#q2").show();

	woopra.tack("a_version_click");
});

$('#q2 .fun').click(function(event){
	event.preventDefault();
	console.log("Item Selected");
	opt = $(this).text();
	console.log(opt);
	answers.q2 = opt;
	console.log(answers);
	$("#q2").hide();
	$("#q3").show();

	woopra.tack("a_version_click");
});

$('#q3 .fun').click(function(event){
	event.preventDefault();
	console.log("Item Selected");
	opt = $(this).text();
	console.log(opt);
	answers.q3 = opt;
	console.log(answers);
	$("#q3").hide();
	$("#q4").show();

	woopra.tack("a_version_click");
});

$('#q4 .fun').click(function(event){
	event.preventDefault();
	console.log("Item Selected");
	opt = $(this).text();
	console.log(opt);
	answers.q4 = opt;
	console.log(answers);
	$("#q4").hide();

	woopra.tack("a_version_click");
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.opt').hide();
	$('.sug').hide();
	$('#q1').show();
	console.log("Javascript connected!");
	var strring = '#s'+Math.floor((Math.random() * 5) + 1);
	console.log( strring);
	$(strring).show();
}
