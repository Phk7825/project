

<%@page import="dto.BoardDto"%>
<%
	BoardDto dto =(BoardDto) request.getAttribute("boardDto");
%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
		table {
			border-collapse: collapse;  /* 한 줄의 경계선으로 만듦. */
			margin:0 auto;
		}
		th,td {
			border: 1px solid grey;
			padding: 8px;
		}
		body{
		text-align:center;
		}
	</style>
</head>
<body>
	<form action="Controller" method="post">
		<input type="hidden" name = "command" value="board_modify_action"/>
		<input type="hidden" name="bno" value="<%=dto.getBno()%>"/>
		제목 : <input type="text" name="title" value="<%=dto.getTitle() %>"/><br/>
		내용 : <textarea name="content"><%=dto.getContent() %></textarea><br/>
		작성자ID : <input type="text" name="writer" value="<%=dto.getWriter() %>"/><br/>
		<input type="submit" value="작성완료">
	</form>
</body>
</html>