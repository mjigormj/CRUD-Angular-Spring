package com.igor.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.igor.crudspring.model.Stock;
import com.igor.crudspring.repository.StockRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/stocks")
@AllArgsConstructor

public class StockController {

    private final StockRepository stockRepository;



    @GetMapping
    public List<Stock> list(){
        return stockRepository.findAll();
    }

}
