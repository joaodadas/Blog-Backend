const express = require("express");
const app = express();

//@ts-ignore
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log('Running'));
