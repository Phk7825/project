<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="Controller" method="post">
		<input type="hidden" name = "command" value="board_write_action"/>
		제목 : <input type="text" name="title"/> <br/>
		내용 : <textarea name="content"></textarea><br/>
		작성자ID : <input type="text" name="writer"/> <br/>
		<input type="submit" value="작성완료">
	</form>
</body>
</html>