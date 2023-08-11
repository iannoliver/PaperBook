package br.com.paperbook.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Categoria")
public class Categoria {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idcategoria;
	
	@Column(nullable=false)
	private String nomecategoria;
	
	@Column(nullable=false)
	private String descricaocategoria;

	public Categoria() {
	}

	public Categoria(Integer idcategoria, String nomecategoria, String descricaocategoria) {
		this.idcategoria = idcategoria;
		this.nomecategoria = nomecategoria;
		this.descricaocategoria = descricaocategoria;
	}

	public Integer getIdcategoria() {
		return idcategoria;
	}

	public void setIdcategoria(Integer idcategoria) {
		this.idcategoria = idcategoria;
	}

	public String getNomecategoria() {
		return nomecategoria;
	}

	public void setNomecategoria(String nomecategoria) {
		this.nomecategoria = nomecategoria;
	}

	public String getDescricaocategoria() {
		return descricaocategoria;
	}

	public void setDescricaocategoria(String descricaocategoria) {
		this.descricaocategoria = descricaocategoria;
	}
	
	
	
	
	
}
