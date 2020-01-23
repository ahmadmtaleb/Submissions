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
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
