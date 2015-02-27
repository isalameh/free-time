

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
});

$('#q4 .fun').click(function(event){
	event.preventDefault();
	console.log("Item Selected");
	opt = $(this).text();
	console.log(opt);
	answers.q4 = opt;
	console.log(answers);
	$("#q4").hide();


})

})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.opt').hide();
	$('#q1').show();
	console.log("Javascript connected!");
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}