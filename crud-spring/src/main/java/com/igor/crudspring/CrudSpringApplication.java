package com.igor.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.igor.crudspring.model.Stock;
import com.igor.crudspring.repository.StockRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(StockRepository stockRepository) {
		return args -> {
			stockRepository.deleteAll();

			Stock s = new Stock();
			s.setName("CTPS11");
			s.setPrice(90.0);

			stockRepository.save(s);
		};
	}

}
