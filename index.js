const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log("Server Running at localhost:3001");
  }
});
