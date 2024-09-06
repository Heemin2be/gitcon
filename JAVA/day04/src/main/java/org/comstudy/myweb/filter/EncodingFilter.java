package org.comstudy.myweb.filter;

import jakarta.servlet.*;

import java.io.IOException;



public class EncodingFilter implements Filter {
    private String encoding;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        encoding = filterConfig.getInitParameter("encoding");
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
            throws IOException, ServletException {
        req.setCharacterEncoding(encoding);
        resp.setCharacterEncoding(encoding);
        resp.setContentType("text/html; charset=" + encoding);

        System.out.println("request 필터 영역");

        chain.doFilter(req, resp);

        System.out.println("response 필터 영역");

    }
}
