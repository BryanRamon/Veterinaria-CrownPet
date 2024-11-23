package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class TestController {

    @GetMapping("/inicio")
    public String home(Model model) {
        model.addAttribute("title", "Inicio - Veterinaria CrownPet");
        return "index"; // nombre del archivo HTML en src/main/resources/templates
    }

    @GetMapping("/nosotros")
    public String about(Model model) {
        model.addAttribute("title", "Nosotros - Veterinaria CrownPet");
        return "nosotros"; // nombre del archivo HTML en src/main/resources/templates
    }

    @GetMapping("/servicios")
    public String services(Model model) {
        model.addAttribute("title", "Servicios - Veterinaria CrownPet");
        return "servicios"; // nombre del archivo HTML en src/main/resources/templates
    }

    @GetMapping("/especialidades")
    public String specialties(Model model) {
        model.addAttribute("title", "Especialidades - Veterinaria CrownPet");
        return "especialidades"; // nombre del archivo HTML en src/main/resources/templates
    }

    @GetMapping("/productos")
    public String products(Model model) {
        model.addAttribute("title", "Productos - Veterinaria CrownPet");
        return "petShop"; // nombre del archivo HTML en src/main/resources/templates
    }

    @GetMapping("/ingresar")
    public String start(Model model) {
        model.addAttribute("title", "Login - Veterinaria CrownPet");
        return "login"; // nombre del archivo HTML en src/main/resources/templates
    }

}
