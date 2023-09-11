const express = require("express");
const app = express();

//@ts-ignore
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);
