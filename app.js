const express = require("express");
const app = express();

var indexRouter = require("./routes/index");
var userRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog");

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/catalog", catalogRouter);

//setup mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB =
  "mongo db string connect : mongodb+srv://cooluser:cooluser@cluster0.wlv67.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
