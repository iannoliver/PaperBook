package br.com.paperbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.paperbook.domain.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Integer>{

}
