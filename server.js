const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

//init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the ContactKeeper API..." })
);

//define routes
app.use("/api/login", require("./routes/login"));
app.use("/api/register", require("./routes/register"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
