var data = require("../data.json");

exports.addFriend = function(request, response) {    
		// Your code goes here
	var name = request.query.name;
	var desc = request.query.description;
	var imgUrl = "http://lorempixel.com/500/500/people";
	var entry = {"name": name, "description": desc, "imageURL": imgUrl};
	data.friends.push(entry);
	response.render('index', data);
 };