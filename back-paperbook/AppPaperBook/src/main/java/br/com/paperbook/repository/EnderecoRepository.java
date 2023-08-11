package br.com.paperbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.paperbook.domain.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Integer> {

}
