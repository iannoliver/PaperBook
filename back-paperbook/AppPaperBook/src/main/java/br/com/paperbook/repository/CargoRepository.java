package br.com.paperbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.paperbook.domain.Cargo;

public interface CargoRepository extends JpaRepository<Cargo, Integer>{

}
