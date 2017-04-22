const FRIENDS = require("../data/friends.js");

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(FRIENDS);
	});
	app.post('/api/friends', function(req,res){
		res.json(compareScores(req.body));
		FRIENDS.push(req.body);
	});
}

function compareScores(user){
	let bff;
	let lowestTotal = 100;
	for(let key in FRIENDS){
		let friend = FRIENDS[key];
		let total = 0;
		for(let i =0; i < user.scores.length; i++){
			total += Math.abs(user.scores[i] - friend.scores[i])
		}
		if(total < lowestTotal){
			lowestTotal = total;
			bff = friend;
		}
	}
	return(bff);
}