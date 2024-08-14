const express = require('express');
const bookRouter = require('./route/books');
const logMiddleware = require("./utils/middleware");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json()); // middleware to use body from post request
app.use(cookieParser("helloworld"));
app.use(session({
    secret: 'kuvduvluysf',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: 60000 *60,
    },
}));


mongoose.connect("mongodb://localhost/express_tutorial").then(
    () =>{
        console.log("Connected to the database");
    }
).catch((err) => console.log(`Error ${err}`));
app.use(logMiddleware);
app.use('/api/books',bookRouter);
app.get("/",(request,response) =>{
    console.log(request.sessionID)
    return response.send("App is working");
});
app.listen(PORT,()=> console.log(`App running on port ${PORT}`));
