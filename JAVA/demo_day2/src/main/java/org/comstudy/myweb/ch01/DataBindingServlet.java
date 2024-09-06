package org.comstudy.myweb.ch01;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/ch01/result.do")
public class DataBindingServlet extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //세션을 비우는 처리
        req.getSession().invalidate();
        //invalidate : 세션에 있는 내용을 비워라
        resp.sendRedirect("input.jsp");
    }
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // input.jsp에서 전달한 파라미터 받기
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        System.out.printf("name:%s, email:%s%n", name, email);
        // Request에 바인딩
        req.setAttribute("name", name);
        // session에 바인딩
        HttpSession session = req.getSession();
        session.setAttribute("email", email);
        // forward에 바인딩
        String viewName = "/WEB-INF/views/result.jsp";
        RequestDispatcher view = req.getRequestDispatcher(viewName);
        view.forward(req, resp);
    }
}

