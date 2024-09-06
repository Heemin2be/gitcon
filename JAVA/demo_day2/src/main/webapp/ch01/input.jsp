<%--
  Created by IntelliJ IDEA.
  User: heemin
  Date: 2024. 8. 30.
  Time: 오후 1:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>이름 / 이메일 입력 폼</h1>
<%
  if(session.getAttribute("email")==null){
%>
<form action="result.do" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" value="Hong"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" value="hong@gmail.com"><br><br>
  <input type="submit" value="Send">
</form>
<%
  } else {
%>
<p>이미 세션에 이메일에 들어있다. </p>
<a href="result.do"> 로그아웃 (doGet에서 처리) </a>
<%
  }
%>
</body>
</html>
