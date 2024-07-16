const express = require("express");

const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("connected to mongo db")
);

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
