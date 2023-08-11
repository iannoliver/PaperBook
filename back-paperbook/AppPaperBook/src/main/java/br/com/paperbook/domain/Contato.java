package br.com.paperbook.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Contato {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idcontato;
	
	@Column(length = 20, unique = false)
	private String telefonecelular;
	
	@Column(length = 20, nullable = false)
	private String telefoneresidencial;
	
	@Column(length = 50, unique = false)
	private String email;

	public Contato() {
		
	}

	public Contato(Integer idcontato, String telefonecelular, String telefoneresidencial, String email) {
		this.idcontato = idcontato;
		this.telefonecelular = telefonecelular;
		this.telefoneresidencial = telefoneresidencial;
		this.email = email;
	}

	public Integer getIdcontato() {
		return idcontato;
	}

	public void setIdcontato(Integer idcontato) {
		this.idcontato = idcontato;
	}

	public String getTelefonecelular() {
		return telefonecelular;
	}

	public void setTelefonecelular(String telefonecelular) {
		this.telefonecelular = telefonecelular;
	}

	public String getTelefoneresidencial() {
		return telefoneresidencial;
	}

	public void setTelefoneresidencial(String telefoneresidencial) {
		this.telefoneresidencial = telefoneresidencial;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
	
	
	
}
