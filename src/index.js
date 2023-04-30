const express = require('express');
const bookRouter = require('./route/books');
const app = express();
const PORT = 3001;

app.use(express.json()); // middleware to use body from post request
app.use('/books',bookRouter);
app.listen(PORT,()=> console.log("App running on port 3001"));
