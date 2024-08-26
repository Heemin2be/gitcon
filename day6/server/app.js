const http = require('http');
const express = require('express');
const app = express();
const path =  require('path');
const bodyParser = require = require('body-parser');
//npm i -S body-parser


//바디파서 미들웨어 지정 - POST 방식의 파라미터 사용 가능.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


// _dirname : 절대경로
// 리눅스 올라가면 경로 바뀜 -> path join
app.set('views',path.join(__dirname,'views')); //app.get nodejs 프렘웤
app.set('views engine','ejs');
app.set('port',3000);
app.get("/",(req,res)=>{
    //res.redirect('이동 할 경로로 알아서 이동'); 지정된 url로 페이지 이동
    //res.redirect('http://naver.com');
    //end() 문자열을 화면에 출력한다.
    res.writeHead(200,{"content-Type":"text/html; charset=UTF-8"}); //한글되게 만든?ㄷㄷ
    //res.end("안녕세계"); // 한글 안됨
    //res.end({"hello":"world"}); 객체를 넣었더니 허허;

    var obj = {no:120,name:"Hong"};
    //res.end(JSON.stringfy(obj));
     // writeHead()는 생략
    // res.send(obj); send()는 수식, 문자열을 화면에 보여준다.

});
//localhost:3000/data/hong/love ==> get('/data/:user/:message')
//localhost:3000/data?user=Hong&message=Love
app.get('/data',(req,res) => {
    //POST 방식: body,패스파ㅏ라미터 방식: params, Get방식에는 : query객체로 전달
    //POST 방식에서는 bodyParser 미들웨어 설정 필수.
    const user = req.query.user;
    const message = req.query.message;
    const jsonData = {user,message};

    res.send(jsonData); // 유저한테 메세지가간다.
});

// 임시로 Todolist 데이터 저장
const todoList=[ 
    {no:101, title:'자연 보호1', done:false},     // ? "" '' 없는거 차이
    {no:102, title:'자연 보호2', done:true},
    {no:103, title:'자연 보호3', done:false},
    {no:104, title:'자연 보호4', done:true},
    {no:105, title:'자연 보호5', done:false}
];
var noSeq = 106;

//AJAX를  REST 방식으로 처리 (HTML 폼은 GET과 POST만 가능)

//아래를 통해 CRUD 구현가능
//GET - 출력,검샘 - query
//POST - 입력 - body
//PUT - 수정
//DELETE - 삭제
//FETCH - 부분수정
//... 그외


//검색 or SellectAll
app.get('/todo/search',(req,res)=>{ //정보 보내는 
    var keyword = req.query.keyword;
    var newTodoList = todoList.filter((todo)=>{
        return todo.title.filter.findIndex(keyword) != -1;
    });

    res.send(newTodoList);
    
});
//  상세보기 or 전체보기
app.get('/todo', (req, res) => {
    if(req.query.no) {
        var no = req.query.no;
        var idx = todoList.findIndex((t)=>{
            return t.no == no;
        });
        if(idx != -1) {
            res.send(todoList[idx]);
        } else {
            res.send(null);
        }
        return;
    }
    
    res.send(todoList);
});

//입력 
app.post('/todo',(req,res)=>{
    var title= req.body.title;
    todoList.push({no:noSeq++,title,done:false});
    res.send(todoList);
});
//수정
app.put('/todo',(req,res)=>{
    //var no = req.body.no;
    //var title = req.body.title;
    //var done = req.body.done; //문자열을 boolean으로 변경.

    var todo = req.body;
    console.dir(todo);
    
    var idx = todoList.findIndex(()=>{
    return todo.no == todo.no;

    });

    if(idx != -1){
        todoList[idx]=todo;
    }

    res.send(todoList);
});
//삭제
app.delete('/todo',(req,res)=>{
    var no = parseInt(req.body.no);
    var idx = todoList.findIndex((t)=>{
        return t.no == no;
    });
    if(idx != -1){
        todoList.splice(idx,1);
    }
;    res.send(todoList);
});


//get은 그냥 보냄
//post는 저장

const server = http.createServer(app);
server.listen(app.get('port'),() => {
    console.log(`nodejs 서버 실행 중>>> http:localhost:${app.get('port')}`)
});

