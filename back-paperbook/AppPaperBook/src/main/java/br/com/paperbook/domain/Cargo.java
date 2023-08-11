package br.com.paperbook.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
public class Cargo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idcargo;
	
	@Column(nullable = false)
	private String titulocargo;
	
	@Column(nullable = false)
	private Double salario;
	
	@Column(nullable = false)
	private String beneficio;
	
	@Column(nullable = false)
	private String cargahoraria;

	public Cargo() {
		
	}

	public Cargo(Integer idcargo, String titulocargo, Double salario, String beneficio, String cargahoraria) {
		this.idcargo = idcargo;
		this.titulocargo = titulocargo;
		this.salario = salario;
		this.beneficio = beneficio;
		this.cargahoraria = cargahoraria;
	}

	public Integer getIdcargo() {
		return idcargo;
	}

	public void setIdcargo(Integer idcargo) {
		this.idcargo = idcargo;
	}

	public String getTitulocargo() {
		return titulocargo;
	}

	public void setTitulocargo(String titulocargo) {
		this.titulocargo = titulocargo;
	}

	public Double getSalario() {
		return salario;
	}

	public void setSalario(Double salario) {
		this.salario = salario;
	}

	public String getBeneficio() {
		return beneficio;
	}

	public void setBeneficio(String beneficio) {
		this.beneficio = beneficio;
	}

	public String getCargahoraria() {
		return cargahoraria;
	}

	public void setCargahoraria(String cargahoraria) {
		this.cargahoraria = cargahoraria;
	}
	
	
	
	
}
