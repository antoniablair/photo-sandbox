var express = require("express");
var db = require("./app/db");

//to-do: fix the db connect stuff at the top, and find the people.js and add to rest of doc

db.connect()
    .then(function(){
        console.log("database connected");
});


var app = express();
//use the jade library as a view engine
app.set("view engine", "jade");

//to look at it as html (I don't know how this works:)
// app.locals.pretty=true;

//express is middleware

app.get("/", function(req, res){
    console.log(req.query.count);
    // to see this all in the browser
    // res.send("hello world");
    res.render("index");
});


// it's going to look for a things.jade file inside the views directory
// if it doesn't find it, you'll get an error
// app.get("/things", function(req, res){
//   res.render("things"); 
// });

app.listen(process.env.PORT);