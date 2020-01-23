const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("OK");
});
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.get("/time", (req, res) => {
  res.send({ status: 200, message: new Date() });
});
app.get("/hello/:id", (req, res) => {
  res.send({ status: 200, message: "Hello, " + req.params.id });
});

app.get("/search", (req, res) => {
  const search = req.query.s;

  if (typeof search != "undefined") {
    const response = {
      status: 200,
      message: "ok",
      data: search
    };

    res.send(response);
  } else {
    const response = {
      status: 500,
      error: true,
      message: "you have to provide a search"
    };

    res.status(500);
    res.send(response);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
