const express = require("express");

const tableRouter = require("./Routes/tableRoutes");
const postRoutes = require("./Routes/postRoutes");
const expiredRoutes = require("./Routes/expiredPasswordRoute");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.send("test");
});

console.log(new Date().toISOString().substr(0, 10));

app.use(express.json());

app.use("/table/", tableRouter);

app.use("/post/", postRoutes);

app.use("/expired/", expiredRoutes);
