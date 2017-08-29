const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  bodyParser.json({
    urlExtended: true
  })
);

app.get("/", (req, res) => {
  res.send({
    hey: "listening"
  });
});

app.listen(PORT, () => {
  console.log(`express is listening on ${PORT}`);
});
