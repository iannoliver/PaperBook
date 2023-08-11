package br.com.paperbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.paperbook.domain.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
