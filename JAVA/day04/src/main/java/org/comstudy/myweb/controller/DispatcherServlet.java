package org.comstudy.myweb.controller;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;


@WebServlet("/*.do")
public class DispatcherServlet extends HttpServlet {
    String prefix ="";
    String suffix = "" ;

    @Override
    public void init() throws ServletException {
        prefix = getInitParameter("prefix");
        suffix = getInitParameter("suffix");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Get : doGet() - DispatcherServlet");

        //메세지 바인딩
        req.setAttribute("message ","Hello Spring World");

        String viewName = "home.jsp";
        RequestDispatcher view = req.getRequestDispatcher(prefix + viewName+ suffix);
        view.forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    }
}
