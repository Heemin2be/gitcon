//옛날 방식
const http = "http";
const express = require("express");
const app = express();

const mongojs = require("mongojs");
const db = mongojs("vehicle", ["car"]);

app.set("port", 3000);

app.get("/", async (req, res) => {
  console.log("GET - / 요청 ...");
  if (db) {
    //mongojs는 옛날 기술 - 콜백 함수로 처리.
    const carList = await db.car.find((err, result) => {
      if (err) throw err;
      let html = '<table border="1">';
      result.forEach((car, i) => {
        console.log(car, i);
        html += `<tr><td>${car.name}</td></tr>
        <tr><td>${car.price}</td></tr>
        <tr><td>${car.company}</td></tr>
        <tr><td>${car.year}</td></tr>
        
        `;
      });
      html += "</table>";
      res.end(html);
    });
  } else {
    res.end("db가 연결되지 않았습니다.");
  }
});

const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log(`서버 실행 중>>> http://localhost:${app.get("port")}`);
});
