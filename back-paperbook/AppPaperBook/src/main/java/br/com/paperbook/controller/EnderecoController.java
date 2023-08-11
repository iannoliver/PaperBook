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
import br.com.paperbook.domain.Endereco;
import br.com.paperbook.repository.EnderecoRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/endereco")
public class EnderecoController {
	
	@Autowired
	private EnderecoRepository endRepo;
	
	@GetMapping("/listar")
	public List<Endereco> Lista(){
		return endRepo.findAll();
	}
	@GetMapping("/buscar/{id}")
	public Optional<Endereco> buscar(@PathVariable Integer id){
		return endRepo.findById(id);
	}
	
	@PostMapping("/cadastrar")
	public String cadastrar(@RequestBody Endereco end) {
		endRepo.save(end);
		return "Endereço cadastrado";
		
	}
	
	@PutMapping("/atualizar/{id}")
	public String atualizar(@PathVariable Integer id,@RequestBody Endereco end) {
		Optional<Endereco> ct = endRepo.findById(id);
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
