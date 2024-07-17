const express = require("express");
const path = require("path");
const URL = require("./models/url");
const urlRoute = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const { connectToMongoDB } = require("./connect");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("connected to mongo db")
);

app.set("view engine", "ejs");

app.set("views", path.resolve("./views"));

app.use(express.json()); // to accept json data
app.use(express.urlencoded({ extended: false })); // to accept form data

app.use("/", urlRoute);
app.use("/", staticRouter);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
