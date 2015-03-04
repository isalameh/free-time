

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
var opt = [];

$('#q1 .fun').click(function(event){
	event.preventDefault();
	console.log("Item Selected");
	opt = $(this).text();
	console.log(opt);
	answers.q1 = opt;
	console.log(answers);
	$("#q1").hide();

	woopra.tack("b_version_click");
});

$('#q2 .fun').click(function(event){
	event.preventDefault();
	console.log("Item Selected");
	opt = $(this).text();
	console.log(opt);
	answers.q2 = opt;
	console.log(answers);
	$("#q2").hide();

	woopra.tack("b_version_click");
});

$('#q3 .fun').click(function(event){
	event.preventDefault();
	console.log("Item Selected");
	opt = $(this).text();
	console.log(opt);
	answers.q3 = opt;
	console.log(answers);
	$("#q3").hide();

	woopra.tack("b_version_click");
});

$('#q4 .fun').click(function(event){
	event.preventDefault();
	console.log("Item Selected");
	opt = $(this).text();
	console.log(opt);
	answers.q4 = opt;
	console.log(answers);
	$("#q4").hide();

	woopra.tack("b_version_click");
})


// $('.fun').click(function(event){
// 	event.preventDefault();
// 	console.log("Item Selected");
// 	$(this).toggleClass("funS" );
// 	$('#q')
	
// 	woopra.tack("b_version_click");
// });

// $('.funS').click(function(event){
// 	event.preventDefault();
// 	console.log("Item Selected");
// 	$(this).toggleClass("fun" );
// });

// })


function initializePage() {
	console.log("Javascript connected!");
}
