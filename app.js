const express = require("express");
const cors = require("cors");
require("dotenv").config();

const indexRoutes = require("./routes/index.routes");
const apiRoutes = require("./routes/api.routes");

const app = express();

// const config = {
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
// };
// app.use(cors(config));

app.use(cors());


app.use(express.json());

app.use("/", indexRoutes);
app.use("/api", apiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`);
});
