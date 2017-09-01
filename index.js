const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require("cookie-session");
const key = require("./config/keys");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [key.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

//Helper Services
require("./models/User");
require("./services/passport");
require("./routes/authenticateRoute")(app);

mongoose.connect(key.mongoURI);

mongoose.connection.on("error", err => {
	if (err) {
		console.log(err);
	}
	console.log(`Mongoose connected to ${key.mongoURI}`);
});

app.use(
	bodyParser.json({
		urlExtended: true
	})
);

app.listen(PORT, () => {
	console.log(`express is listening on ${PORT}`);
});
