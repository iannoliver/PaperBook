//referenciar os controles: input nome, descricao e btncadastrar
let idend = ""
let tipo = document.getElementById("tipo")
let logradouro = document.getElementById("logradouro")
let cep = document.getElementById("cep")
let numero = document.getElementById("numero")
let complemento = document.getElementById("complemento")
let referencia = document.getElementById("referencia")
let bairro = document.getElementById("bairro")
let cidade = document.getElementById("cidade")
let estado = document.getElementById("estado")
let btncadastrar = document.getElementById("btncadastrar")

//Realizar o cadastro ou a atualização quando o botão for pressionado
btncadastrar.onclick = () => {
    if(btncadastrar.value == "Atualizar") {
        fetch("http://10.26.44.57:5000/api/v1/endereco/atualizar/"+idend, {
            method:"PUT",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                tipo: tipo.value,
                logradouro: logradouro.value,
                cep: cep.value,
                numero: numero.value,
                complemento: complemento.value,
                referencia: referencia.value,
                bairro: bairro.value,
                cidade: cidade.value,
                estado: estado.value,
            })
        })
        .then((response)=>response.json())
        .then((dados)=>alert("Atualizado")) 
        .catch((error)=>console.error(error))
        alert("O Endereço foi atualizado. Atualize a página")
        window.location.reload()
    } else {
        fetch("http://10.26.44.57:5000/api/v1/endereco/cadastrar", {
        method:"POST",
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            tipo: tipo.value,
            logradouro: logradouro.value,
            cep: cep.value,
            numero: numero.value,
            complemento: complemento.value,
            referencia: referencia.value,
            bairro: bairro.value,
            cidade: cidade.value,
            estado: estado.value,
        })
    })
    .then((response)=>response.json())
    .then((dados)=>alert(dados)) 
    .catch((error)=>console.error(error))
    alert("O Endereço foi cadastrado. Atualize a página")
    window.location.reload()
    }
}

// exibir as catecorias cadastradas
function exibirEnderecos() {
    let saida = ""
    fetch("http://10.26.44.57:5000/api/v1/endereco/listar")
    .then((response)=>response.json())
    .then((dados) => {
        dados.map((itens,ix)=>{
            saida += `<tr><td>${itens.idendereco}</td>
            <td>${itens.tipo}</td>
            <td>${itens.logradouro}</td>
            <td>${itens.cep}</td>
            <td>${itens.numero}</td>
            <td>${itens.complemento}</td>
            <td>${itens.referencia}</td>
            <td>${itens.bairro}</td>
            <td>${itens.cidade}</td>
            <td>${itens.estado}</td>
                        
            <td>
                <a href=# onclick="atualizar('${itens.idendereco}','${itens.tipo}','${itens.logradouro}', '${itens.cep}', '${itens.numero}', '${itens.complemento}', '${itens.referencia}', '${itens.bairro}', '${itens.cidade}', '${itens.estado}')">
                Atualizar
                </a>
            </td>
            <td> 
                <a href=# onclick=apagar('${itens.idendereco}')>
                Apagar
                </a>
            </td>
            </tr>`
        })
        document.getElementsByTagName("tbody")[0].innerHTML = saida
    }).catch((error)=>console.error("Erro na api "+error))
}

function atualizar(id, tip, log, c, num, comp, ref, bai, cida, est){
    idend = id    
    tipo.value = tip
    logradouro.value = log
    cep.value = c
    numero.value = num
    complemento.value = comp
    referencia.value = ref
    bairro.value = bai
    cidade.value = cida
    estado.value = est

    document.getElementById("btncadastrar").value = "Atualizar"


}

function apagar(id){
    fetch("http://10.26.44.57:5000/api/v1/endereco/apagar/"+id, {method:"DELETE"})
    .then((response)=>response.json())
    .then((dados) => {
        
    }
    ).catch((error)=>console.error("Erro de aplicação"+error))
    alert("O Endereç foi apagado. Atualize a página")
    window.location.reload()
}
