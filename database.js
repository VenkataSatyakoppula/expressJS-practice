const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/express_tutorial").then(
    () =>{
        console.log("Connected to the database");
    }
).catch((err) => console.log(`Error ${err}`));


