// Get all of our friend data
var data = require('../data.json');

//exports.

exports.addRating = function(req, res) {
	res.render('rating');

	var place = req.query.ss;
	var feeling = req.query.feeling;
	var date = req.query.eventDate;

	var newRating = {
		"hh": place,
		"feeling": feeling,
		"eventDate": date
	}

	console.log("New Rating Added: " +feeling);

	data["history"].unshift(newRating);

	console.log("Data Added: " +data);
	res.render('rating');
}

function confirmAction(){
      var confirmed = confirm("Your Activity Has Been Recorded");
      return confirmed;
}