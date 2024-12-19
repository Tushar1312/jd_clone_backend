const mongoose = require("mongoose");

const DBURL =
  "mongodb+srv://tusharsapkal2004:5lwOJwSUBLpxpSfD@cluster0.4g66p.mongodb.net/jd_clone_db?retryWrites=true&w=majority&appName=Cluster0";
 mongoose
  .connect(DBURL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Database not connected", error);
  });