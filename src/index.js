const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const userApiRoute = require("./routers/UsersApi");

connectDB();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT;

app.use("/api/users", userApiRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
