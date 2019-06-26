const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const path = require("path");
const router = require("express").Router();

router.use(function (req, res) {
	res.sendFile(path.join(__dirname, "../client/public/index.html"));
   });
// Route requires
const user = require('./routes/user')
// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/user', user)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness");
// Add routes, both API and view

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"), function(err) {
	  if (err) {
		res.status(500).send(err)
	  }
	})
  })





// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
