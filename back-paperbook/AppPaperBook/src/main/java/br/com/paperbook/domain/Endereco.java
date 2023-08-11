package br.com.paperbook.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Endereco {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idendereco;
	
	@Column(length = 20, nullable = false)
	private String tipo;
	
	@Column(length = 50, nullable = false)
	private String logradouro;
	
	@Column(length = 10, nullable= false)
	private String cep;
	
	@Column(length = 10, nullable = false)
	private String numero;
	
	@Column(length = 45, nullable = true)
	private String complemento;
	
	@Column(length = 45, nullable = true)
	private String referencia;
	
	@Column(length = 45, unique = false)
	private String bairro;
	
	@Column(length = 45, unique = false)
	private String cidade;
	
	@Column(length = 45, unique = false)
	private String estado;

	public Endereco() {
	}

	public Endereco(Integer idendereco, String tipo, String logradouro, String cep, String numero, String complemento,
			String referencia, String bairro, String cidade, String estado) {
		this.idendereco = idendereco;
		this.tipo = tipo;
		this.logradouro = logradouro;
		this.cep = cep;
		this.numero = numero;
		this.complemento = complemento;
		this.referencia = referencia;
		this.bairro = bairro;
		this.cidade = cidade;
		this.estado = estado;
	}

	public Integer getIdendereco() {
		return idendereco;
	}

	public void setIdendereco(Integer idendereco) {
		this.idendereco = idendereco;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getReferencia() {
		return referencia;
	}

	public void setReferencia(String referencia) {
		this.referencia = referencia;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	
	
}
