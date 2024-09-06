<%--
  Created by IntelliJ IDEA.
  User: heemin
  Date: 2024. 8. 30.
  Time: 오후 4:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>login.jsp</title>
</head>
<body>
    <h1>
        Login page
    </h1>
    <form action ="login.do" method="POST">
    <fieldset>
        <legend>login</legend>
        USER NAME : <input type="text" name="username" value="user01"/> <br />
        PASSWORD : <input type="password" >
    </fieldset>
    </form>
</body>
</html>
