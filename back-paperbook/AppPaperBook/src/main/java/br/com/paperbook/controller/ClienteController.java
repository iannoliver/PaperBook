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

import br.com.paperbook.domain.Cargo;
import br.com.paperbook.domain.Cliente;
import br.com.paperbook.repository.ClienteRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/cliente")
public class ClienteController {
	
	@Autowired
	private ClienteRepository cliRepo;
	
	@GetMapping("/listar")
	public List<Cliente> Lista(){
		return cliRepo.findAll();
	}
	@GetMapping("/buscar/{id}")
	public Optional<Cliente> buscar(@PathVariable Integer id){
		return cliRepo.findById(id);
	}
	
	@PostMapping("/cadastrar")
	public String cadastrar(@RequestBody Cliente cli) {
		cliRepo.save(cli);
		return "Cliente cadastrado";
		
	}
	
	@PutMapping("/atualizar/{id}")
	public String atualizar(@PathVariable Integer id,@RequestBody Cliente cli) {
		Optional<Cliente> ct = cliRepo.findById(id);
		String msg = "";
		
		if(ct.isPresent()) {
			Cliente c = new Cliente();
			c.setIdcliente(id);
			c.setNomecliente(cli.getNomecliente());
			c.setCpfcliente(cli.getCpfcliente());
			c.setRgcliente(cli.getRgcliente());
			c.setSexocliente(cli.getSexocliente());
			c.setDatanascimentocliente(cli.getDatanascimentocliente());
			cliRepo.save(c);
			
			msg = "Cliente atualizado";
		} else {
			msg = "Cliente não localizado";
		}
		return msg;
	}
	
	@DeleteMapping("/apagar/{id}")
	public String apagar(@PathVariable Integer id) {
		cliRepo.deleteById(id);
			
		return "Cliente Apagado";
		}
		
}
