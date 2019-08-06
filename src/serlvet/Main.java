package serlvet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Main
 */
@WebServlet(name = "main.mbs", urlPatterns = { "/main.mbs" })
public class Main extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Main() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		String menu = request.getParameter("menu");
		
		if("main".equals(menu) || menu == null){
			RequestDispatcher dispatcher = request.getRequestDispatcher("main.jsp");
			dispatcher.forward(request, response);
		}
		else if("main_add".equals(menu)){
			RequestDispatcher dispatcher = request.getRequestDispatcher("main_add.jsp");
			dispatcher.forward(request, response);
		}
		else if("notice".equals(menu)){
			RequestDispatcher dispatcher = request.getRequestDispatcher("notice.jsp");
			dispatcher.forward(request, response);
		}
		else if("notice_add".equals(menu)){
			RequestDispatcher dispatcher = request.getRequestDispatcher("notice_add.jsp");
			dispatcher.forward(request, response);
		}
		else if("news".equals(menu)){
			RequestDispatcher dispatcher = request.getRequestDispatcher("news.jsp");
			dispatcher.forward(request, response);
		}
		else if("article".equals(menu)){
			RequestDispatcher dispatcher = request.getRequestDispatcher("article.jsp");
			dispatcher.forward(request, response);
		}
		else if("article_add".equals(menu)){
			RequestDispatcher dispatcher = request.getRequestDispatcher("article_add.jsp");
			dispatcher.forward(request, response);
		}
		else if("calendar".equals(menu)){
			RequestDispatcher dispatcher = request.getRequestDispatcher("calendar.jsp");
			dispatcher.forward(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
