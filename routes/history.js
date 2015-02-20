// Get all of our friend data
var data = require('../suggestions.json');

exports.view = function(req, res){
	console.log(data);
	res.render('history', data);
};