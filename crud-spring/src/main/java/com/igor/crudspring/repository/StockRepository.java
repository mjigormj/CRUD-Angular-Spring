package com.igor.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.igor.crudspring.model.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Long> {
    
}
