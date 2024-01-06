const express = require("express");

const tableRouter = require("./Routes/tableRoutes");
const postRoutes = require("./Routes/postRoutes");
const expiredRoutes = require("./Routes/expiredPasswordRoute");
const deleteRoutes = require("./Routes/deleteRoutes");
const updateRoutes = require("./Routes/updateRoutes");

const app = express();

app.listen(3000);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("test");
});

app.use(express.json());

app.use("/table/", tableRouter);

app.use("/post/", postRoutes);

app.use("/expired/", expiredRoutes);

app.use("/delete/", deleteRoutes);

app.use("/update/", updateRoutes);
