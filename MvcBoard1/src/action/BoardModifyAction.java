package action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.BoardDao;
import dto.BoardDto;

public class BoardModifyAction implements Action {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int bno = Integer.parseInt(request.getParameter("bno"));
		String title = request.getParameter("title");
		String content = request.getParameter("content");
		String writer = request.getParameter("writer");
		System.out.println("여까진 대");
		BoardDao bDao = new BoardDao();
		try {
			bDao.modifyBoard(new BoardDto(bno,title,content,writer,null));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		request.getRequestDispatcher("Controller?command=board_detail&bno="+bno).forward(request, response);
	}
	
}
