const EXPRESS = require('express');
const BODYPARSER = require('body-parser');
const PATH = require('path');
const PORT = process.env.PORT || 3000;
const APP = EXPRESS();

APP.use(BODYPARSER.json());
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.text());
APP.use(BODYPARSER.json({ type: "application/vnd.api+json" }));
//APP.use(EXPRESS.static(PATH.join(__dirname, 'FriendFinder/app/css')));

require("./FriendFinder/app/routing/api-routes.js")(APP);
require("./FriendFinder/app/routing/html-routes.js")(APP);

APP.listen(PORT, function(){
	console.log("Listening on port:", PORT);
});
