package action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.BoardDao;

public class BoardDeleteAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int bno = Integer.parseInt(request.getParameter("bno"));
		
		BoardDao bDao = new BoardDao();
		try {
			bDao.deleteBoard(bno);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		request.getRequestDispatcher("Controller?command=board_list").forward(request, response);
	}

}
