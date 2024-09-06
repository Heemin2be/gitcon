package org.comstudy.myweb.listener;

import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;
import jakarta.servlet.annotation.WebListener;


@WebListener
public class MyServletContextListener implements ServletContextListener {
    public void MyServletContextListner(){
        System.out.println("MyServletContextListener");
    }
    public void contextInitialized(ServletContextEvent sce) {

    }
    public void contextDestroyed(ServletContextEvent sce) {

    }
}
