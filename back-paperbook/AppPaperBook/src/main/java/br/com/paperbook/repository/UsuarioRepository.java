package br.com.paperbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.paperbook.domain.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
