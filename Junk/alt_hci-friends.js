

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
// var opt_b = [];

// $('#q1 .fun').click(function(event){
// 	event.preventDefault();
// 	console.log("Item Selected");
// 	opt_b = $(this).text();
// 	console.log(opt_b);
// 	answers.q1 = opt_b;
// 	console.log(answers);
// 	$("#q1").hide();

// 	woopra.track("b_version_click");
// });

// $('#q2 .fun').click(function(event){
// 	event.preventDefault();
// 	console.log("Item Selected");
// 	opt_b = $(this).text();
// 	console.log(opt_b);
// 	answers.q2 = opt_b;
// 	console.log(answers);
// 	$("#q2").hide();

// 	woopra.track("b_version_click");
// });

// $('#q3 .fun').click(function(event){
// 	event.preventDefault();
// 	console.log("Item Selected");
// 	opt_b = $(this).text();
// 	console.log(opt_b);
// 	answers.q3 = opt_b;
// 	console.log(answers);
// 	$("#q3").hide();

// 	woopra.track("b_version_click");
// });

// $('#q4 .fun').click(function(event){
// 	event.preventDefault();
// 	console.log("Item Selected");
// 	opt_b = $(this).text();
// 	console.log(opt_b);
// 	answers.q4 = opt_b;
// 	console.log(answers);
// 	$("#q4").hide();

// 	woopra.track("b_version_click");
// });


$('.fun').click(function(event){
	event.preventDefault();
	console.log("Item Selected");
	$(this).toggleClass("funS" );
//	$('#q')
	
	woopra.track("b_version_click");
});

$('.funS').click(function(event){
	event.preventDefault();
	console.log("Item Selected");
	$(this).toggleClass("fun");
});

})


function initializePage() {
	console.log("Javascript connected!");
}
