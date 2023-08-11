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

import br.com.paperbook.domain.Contato;
import br.com.paperbook.repository.ContatoRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/usuario")
public class UsuarioController {
	
	@Autowired
	private ContatoRepository contRepo;
	
	@GetMapping("/listar")
	public List<Contato> Lista(){
		return contRepo.findAll();
	}
	@GetMapping("/buscar/{id}")
	public Optional<Contato> buscar(@PathVariable Integer id){
		return contRepo.findById(id);
	}
	
	@PostMapping("/cadastrar")
	public String cadastrar(@RequestBody Contato cont) {
		contRepo.save(cont);
		return "Contato cadastrado";
		
	}
	
	@PutMapping("/atualizar/{id}")
	public String atualizar(@PathVariable Integer id,@RequestBody Contato cont) {
		Optional<Contato> ct = contRepo.findById(id);
		String msg = "";
		
		if(ct.isPresent()) {
			Contato c = new Contato();
			c.setIdcontato(id);
			c.setTelefonecelular(cont.getTelefonecelular());
			c.setTelefoneresidencial(cont.getTelefoneresidencial());
			c.setEmail(cont.getEmail());
			contRepo.save(c);
			
			msg = "Contato atualizado";
		} else {
			msg = "Contato não localizado";
		}
		return msg;
	}
	
	@DeleteMapping("/apagar/{id}")
	public String apagar(@PathVariable Integer id) {
		contRepo.deleteById(id);
			
		return "Contato Apagado";
		}
	
}
