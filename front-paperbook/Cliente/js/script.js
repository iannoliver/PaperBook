function carregarClientes() {
  //Variável para carregar os dados dos clientes
  let dados = "";
  fetch("http://localhost:5000/api/v1/cliente/listar")
    .then((response) => response.json())
    .then((rs) => {
      rs.map((itens, ix) => {
        dados += `<li>
                    <div class="linha">
                        <span class="idcliente">${itens.idcliente} |</span>
                        <span class="nome">${itens.nomecliente} |</span>
                        <span class="sexo">${itens.sexocliente} |</span>
                        <span class="maisinformacoes">
                        <a href="#" id="maisinfo" onclick="info('${itens.idcliente}')">
                        Mais informações</a>
                        </span>
                    </div>      
                  </li>`
      });
      document.getElementById("lstclientes").innerHTML = dados
      console.log(rs);
    })
    .catch((err) => {
      console.error(err)
    })
}

function info(id) {
        let dados = ""
        fetch("http://localhost:5000/api/v1/cliente/buscar/"+id)
        .then((response) => response.json())
        .then((rs) => {
            dados =`
            Dados do Cliente \n
            ${rs.nomecliente} 
            CPF: ${rs.cpfcliente} 
            RG: ${rs.rgcliente} 
            Sexo: ${rs.sexocliente}
            Data de Nascimento: ${rs.datanascimentocliente}
            End: ${rs.endereco.logradouro}
            N°: ${rs.endereco.numero}
            Bairro: ${rs.bairro}
            Cidade: ${rs.cidade}
            Celular: ${rs.telefonecalular}
            Residencial: ${rs.telefoneresidencial}
            Email: ${rs.email}
            Usuario: ${rs.login}
            Senha: ${rs.senha}
            Nivel de Acesso: ${rs.nivelacesso}`

            alert(dados)  
        })
    .catch((err) => console.error(err))
}
