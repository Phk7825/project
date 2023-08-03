<%@ page import="java.io.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
    request.setCharacterEncoding("UTF-8");
    String imageHtml = (String)request.getParameter("imageURLs");
    try {
        String fileName = "image_urls.txt";
        FileWriter fileWriter = new FileWriter(fileName, false);
        BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
        PrintWriter printWriter = new PrintWriter(bufferedWriter);
        
        printWriter.println(imageHtml);
        printWriter.close();
    } catch (IOException e) {
        e.printStackTrace();
    }
%>

Images Saved.
