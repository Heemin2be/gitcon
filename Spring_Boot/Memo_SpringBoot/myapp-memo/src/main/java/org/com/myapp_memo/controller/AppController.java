package org.com.myapp_memo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class AppController {
    @GetMapping("/home")
    public String home(Model model) {
    model.addAttribute("memo","Memo App");
    return "home";
    }
    @GetMapping("/test")
    public String test(Model model) {
        model.addAttribute("memo","Memo App");
        return "test";
    }
}
