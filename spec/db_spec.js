var db = require("../app/db");

db.connect()
    .then(function(){
        console.log("database connected");
});
