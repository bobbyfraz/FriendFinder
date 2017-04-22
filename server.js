const EXPRESS = require('express');
const BODYPARSER = require('body-parser');
const PATH = require('path');
const PORT = 3000;
const APP = EXPRESS();

APP.use(BODYPARSER.json());
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.text());
APP.use(BODYPARSER.json({ type: "application/vnd.api+json" }));

require("./app/routing/api-routes.js")(APP);
require("./app/routing/html-routes.js")(APP);

APP.listen(PORT, function(){
	console.log("Listening on port:", PORT);
});
