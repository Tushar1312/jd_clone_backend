const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8000;

require("./db_connection/DB_connection");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/Routes"));

app.listen(PORT, () => {
  console.log("Server started on port no ", PORT);
});