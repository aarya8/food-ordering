const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://aarya2:HmoOyZXWKBr7u6Kk@cluster0.extbu7p.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
