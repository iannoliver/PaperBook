package br.com.paperbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.paperbook.domain.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer>{

}
