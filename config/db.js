const mongoose = require("mongoose");
const { config } = require("./config");

mongoose.Promise = global.Promise;

mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Unable to connect to database: " + err);
    process.exit(1);
  });
