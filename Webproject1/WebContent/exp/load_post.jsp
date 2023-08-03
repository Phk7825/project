<%@ page import="java.sql.*, javax.naming.*, javax.sql.DataSource, java.io.InputStream, java.util.Base64" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Load Post</title>
</head>
<body>
    <%
        Context initCtx = new InitialContext();
        Context envCtx = (Context) initCtx.lookup("java:/comp/env");
        DataSource ds = (DataSource) envCtx.lookup("jdbc/TestDB");
        
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        
        try {
            conn = ds.getConnection();
            String sqlPosts = "SELECT * FROM posts";
            pstmt = conn.prepareStatement(sqlPosts);
            rs = pstmt.executeQuery();
            
            while (rs.next()) {
                String content = rs.getString("content");
                Blob imageBlob = rs.getBlob("image");
    %>
        <div class="post">
            <%= content %>
            <%
                if (imageBlob != null) {
                    InputStream is = imageBlob.getBinaryStream();
                    byte[] imageBytes = new byte[(int)imageBlob.length()];
                    is.read(imageBytes);

                    String base64Image = Base64.getEncoder().encodeToString(imageBytes);
            %>
            <img src="data:image/png;base64, <%= base64Image %>" alt="Image">
            <% }
            %>
        </div>
    <%
        }
    } catch (SQLException e) {
        e.printStackTrace();
    } finally {
        if (rs != null) {
            try {
                rs.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if (pstmt != null) {
            try {
                pstmt.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
%>
</body>
</html>
