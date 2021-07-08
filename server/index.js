const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());
app.get("/error", (req, res) => {
  console.log(`GET ${req.route.path}`);
  res.status(500);
  res.send({ message: "This server LOVES to dissapoint you!!" });
});

app.listen(port, () => {
  console.log("Server running!");
});
