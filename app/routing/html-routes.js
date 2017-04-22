const PATH = require('path');

module.exports = function(app){
	app.get('/', function(req, res){
		res.sendFile(PATH.join(__dirname, "../public/home.html"));
	});
	app.get('/survey', function(req, res){
		res.sendFile(PATH.join(__dirname, "../public/survey.html"));
	});
	app.get('*', function(req,res){
		res.writeHead(404, {"Content-Type": "text/html"});
		res.write("<h1>404 Page Not Found </h1>");
		res.end("Wrong page!  Try again.");
	});
};