package action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.BoardDao;
import dto.BoardDto;

public class BoardWriteAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String title = request.getParameter("title");
		String content = request.getParameter("content");
		String writer = request.getParameter("writer");
		
		BoardDao bDao = new BoardDao();
		BoardDto dto = new BoardDto(0,title,content,writer,null);
		try {
			bDao.insertBoard(dto);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		request.getRequestDispatcher("Controller?command=board_list").forward(request, response);
	}
	
}
