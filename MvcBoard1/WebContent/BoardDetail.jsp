<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ page import="dto.BoardDto"%>
<%@ page import="dao.BoardDao"%>
    
<%  // <%부터 % > 까지 : 스크립틀릿. 
	BoardDto dto = (BoardDto)request.getAttribute("boardDto");//오른쪽의 값은 오브젝트고 왼쪽은 BoardDto니까 자식-부모 이해. 다운캐스팅
	
%>

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
	<table>
		<tr>
			<th>번호</th>
			<td><%=dto.getBno() %></td>
		</tr>
		<tr>
			<th>제목</th>
			<td><%=dto.getTitle() %></td>
		</tr>
		<tr>
			<th>내용</th>
			<td><%=dto.getContent().replaceAll("\n","<br/>") %></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td><%=dto.getWriter() %></td>
		</tr>
	</table>
	<button onclick="location.href='Controller?command=board_list';">목록으로</button>
	<button onclick="location.href='Controller?command=board_delete_action&bno=<%=dto.getBno()%>';">삭제하기</button>
	<button onclick="location.href='Controller?command=board_modify_form&bno=<%=dto.getBno() %>';">수정하기</button>
</body>
</html>







