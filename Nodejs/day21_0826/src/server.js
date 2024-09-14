// node.js 프로젝트와 mongodb 연동 테스트
// 결과를 웹 브라우저에서 출력
const http = require("http");
const express = require("express");
const app = express();
const { MongoClient } = require("mongod");
const path = require("path");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
let db = null;

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    db = await client.db("vehicle");
    // Send a ping to confirm a successful connection
    console.log
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  
  }
}

app.set("port", 3000);
app.set("view engine", "ejs"); // 접미사
app.set("views", path.join(__dirname, "../views")); // 접두사: 절대 경로 + 상대 경로

app.get("/", (req, res) => {
  console.log("GET - / 요청 ...");
  if (db) {
    // mongojs는 옛날 기술 - 콜백 함수로 처리.
    db.car.find((err, result) => {
      if (err) throw err;
      // 접두사와 접미사 생략 - 파일명만 사용
      req.app.render("CarList", { carList: result }, (err2, html) => {
        if (err2) throw err2;
        res.end(html);
      });
    });
  } else {
    res.end("db가 연결되지 않았습니다!");
  }
});

const server = http.createServer(app);
server.listen(app.get("port"), () => {
  // 일체유심조 (씨크리트)
  // 백견이불여일타 (중요)
  console.log(`서버 실행 중>>> http://localhost:${app.get("port")}`);
  run().catch(console.dir);
});
