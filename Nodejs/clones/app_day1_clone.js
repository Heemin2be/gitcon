const http = require("http");
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.set("port", 3000);
app.set("views", path.join(__dirname));
app.set("view engine", ejs);

app.use("/", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  console.log("Get / 요청 실행")
  res.end("<h1>Hello World</h1>");
});

//ejs 뷰 엔진에서 파라미터 확인