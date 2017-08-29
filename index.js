const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Helper Services
require("./services/passport");
require("./routes/authenticateRoute")(app);

const PORT = process.env.PORT || 3001;

app.use(
  bodyParser.json({
    urlExtended: true
  })
);

app.listen(PORT, () => {
  console.log(`express is listening on ${PORT}`);
});
