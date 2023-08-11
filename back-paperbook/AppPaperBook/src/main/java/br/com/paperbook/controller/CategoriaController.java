package br.com.paperbook.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.paperbook.domain.Categoria;
import br.com.paperbook.repository.CategoriaRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/categoria")
public class CategoriaController {
	
	//declaração de auto instância
	@Autowired
	private CategoriaRepository catRepo;
	
	@GetMapping("/listar")
	public List<Categoria> Lista(){
		return catRepo.findAll();
	}
	@GetMapping("/buscar/{id}")
	public Optional<Categoria> buscar(@PathVariable Integer id){
		return catRepo.findById(id);
	}
	
	@PostMapping("/cadastrar")
	public String cadastrar(@RequestBody Categoria cat) {
		catRepo.save(cat);
		return "Categoria cadastrada";
		
	}
	
	@PutMapping("/atualizar/{id}")
	public String atualizar(@PathVariable Integer id,@RequestBody Categoria cat) {
		Optional<Categoria> ct = catRepo.findById(id);
		String msg = "";
		
		if(ct.isPresent()) {
			Categoria c = new Categoria();
			c.setIdcategoria(id);
			c.setNomecategoria(cat.getNomecategoria());
			c.setDescricaocategoria(cat.getDescricaocategoria());
			catRepo.save(c);
			
			msg = "Categoria atualizada";
		} else {
			msg = "Categoria não localizada";
		}
		return msg;
	}
	
	@DeleteMapping("/apagar/{id}")
	public String apagar(@PathVariable Integer id) {
		catRepo.deleteById(id);
			
		return "Categoria Apagada";
		}
		
	}
