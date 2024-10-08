import "./App.css";
import {useState} from "react";

const App = ()=>{
    // 전역변수를 state로 만들어 주어야 re rendering 된다.
    // 구조분해 할당 = state변수, setter함수
    const [name, setName] = useState("Todo List");
    const [todoList, setTodoLilst] = useState([
        {no:101, title:"공부하기", done: false},
        {no:102, title:"자바하기", done: true},
        {no:103, title:"리액트하기", done: false},
        {no:104, title:"스프링하기", done: false}
    ]);
    const [noCnt, setNoCnt] = useState(105);

    const [inputTitle, setInputTtile] = useState("");

    const onClickEvent = () => {
        // 기존 내용에 새 내용을 추가 해서 새 배열을 생성
        setTodoLilst([...todoList, {no:noCnt, title:inputTitle, done: false}]);
        setNoCnt(noCnt+1);
        setInputTtile("");
    }

    const onChangeTitle = (e) => {
        setInputTtile(e.target.value);
    }

    const onDelete = ({no, title, done}) => {
        const newList = todoList.filter((todo)=> {
            return todo.no != no;
        });
        setTodoLilst(newList);
    }

    return (<div className="todoList">
        <div className="App-header">
            <h1>{name} App</h1>
        </div>
        <div className="input-title">
        <div className="container" style={{padding: "10px"}}>
            <div className="input-group mb-3">
                <input value={inputTitle} onChange={onChangeTitle} type="text" className="form-control"/>
                <div className="input-group-append">
                    <button className="btn btn-success" onClick={onClickEvent}>Save</button>
                </div>
            </div>
        </div>
        </div>
        <div className="list-body">
        <div className="container">
        <table className="table table-hover">
            <thead>
                <tr style={{textAlign:"center"}}>
                    <th>Done</th>
                    <th>Title</th>
                    <th>Buttons</th>
                </tr>
                </thead>
                <tbody>
                {todoList.map((item)=> {
                    return(<tr key={item.no}>
                        <td colSpan={3} style={{padding:"0px"}}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                <input type="checkbox" />
                                </div>
                            </div>
                                <input type="text" className="form-control" readOnly value={item.title} />
                                <div className="input-group-append">
                                <button className="btn btn-primary" type="button">Edit</button>  
                                <button onClick={()=>{
                                    onDelete(item);
                                }} className="btn btn-danger" type="button">Delete</button>  
                            </div>
                            </div>
                        </td>
                    </tr>)
                })}
                </tbody>
            </table>
            <ul>
                
            </ul>
        </div>
        </div>
    </div>);
}

export default App;