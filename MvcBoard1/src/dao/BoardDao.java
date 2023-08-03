package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import dto.BoardDto;

public class BoardDao {
	public Connection getConnection() throws Exception {
		String driver = "oracle.jdbc.driver.OracleDriver";
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		String dbId = "test";
		String dbPw = "1234";
		
		Class.forName(driver);   
		Connection conn = DriverManager.getConnection(url, dbId, dbPw);
		
		return conn;
	}
	public BoardDto getBoardDto(int bno) throws Exception {
		Connection conn = getConnection();
		
		String sql = "SELECT * FROM board WHERE bno=?";
		
		PreparedStatement pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, bno);
		
		ResultSet rs = pstmt.executeQuery();

		BoardDto dto = null;
		if(rs.next()) {
			String title = rs.getString("title");
			String content = rs.getString("content");
			String writer = rs.getString("writer");
			String writedate = rs.getString("writedate");
			dto = new BoardDto(bno, title, content, writer, writedate);
		}
		rs.close();
		pstmt.close();
		conn.close();
		return dto;
	}
	public ArrayList<BoardDto> getAllBoardList() throws Exception{
		Connection conn = getConnection();
		String sql = "SELECT * FROM board ORDER BY bno DESC";
		PreparedStatement pstmt = conn.prepareStatement(sql);
		ResultSet rs = pstmt.executeQuery();
		ArrayList<BoardDto> list1 = new ArrayList<BoardDto>();
		
		while(rs.next()) {
			int bno = rs.getInt("bno");
			String title = rs.getString("title");
			String content = rs.getString("content");
			String writer = rs.getString("writer");
			String writedate = rs.getString("writedate");
			//rs.getNString() ->NVARCHAR2타입
			//rs.getString() ->VARCHAR2타입
			BoardDto dto = new BoardDto(bno,title,content,writer,writedate);
			list1.add(dto);
		}
		rs.close();
		pstmt.close();
		conn.close();
		return list1;
	}
	public void insertBoard(BoardDto dto) throws Exception{
		String sql = "INSERT INTO board(bno,title,content,writer)"
				+ " VALUES(seq_board.nextval,?,?,?)";
		Connection conn = getConnection();
		PreparedStatement pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, dto.getTitle());
		pstmt.setString(2, dto.getContent());
		pstmt.setString(3, dto.getWriter());
		
		pstmt.executeUpdate();
		pstmt.close();
		conn.close();
	}
	public void deleteBoard(int bno) throws Exception {
		Connection conn = getConnection();
		String sql="DELETE FROM board WHERE bno=?";
		PreparedStatement pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, bno);
		pstmt.executeUpdate();
		pstmt.close();
		conn.close();
	}
	public void modifyBoard(BoardDto boardDto) throws Exception {
		Connection conn = getConnection();
		String sql = "UPDATE board SET title=?, content=? WHERE bno=?";
		PreparedStatement pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, boardDto.getTitle());
		pstmt.setString(2, boardDto.getContent());
		pstmt.setInt(3, boardDto.getBno());
		
		pstmt.executeUpdate();
		
		pstmt.close();
		conn.close();
	}
}












