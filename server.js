let express = require("express");

let indexRouter = require("./routes/index")
let usersRouter = require("./routes/users")
let users2Router = require("./routes/users2")
let users3Router = require('./routes/users3')

let app = express()

app.use('/',indexRouter);
app.use("/users",usersRouter);
app.use("/users2",users2Router);
app.use("/users3",users3Router);

module.exports = app;