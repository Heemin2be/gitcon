package org.comstudy.myweb;


import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import java.io.IOException;

//어노테이션을 이용해서 URL매핑 하는 대신 xml
public class LifecycleServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public LifecycleServlet() {
        System.out.println("1. 생성자 - LifecycleServlet");
    }

    @Override
    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
        System.out.println("3. service - LifecycleServlet");
    }

    @Override
    public void destroy() {
        System.out.println("4. destroy - LifecycleServlet");
    }

    @Override
    public void init() throws ServletException {
        System.out.println("2. init() - LifecycleServlet");
    }
}
