//referenciar os controles: input nome, descricao e btncadastrar
let idcont = ""
let celular = document.getElementById("celular")
let residencial = document.getElementById("residencial")
let email = document.getElementById("email")
let btncadastrar = document.getElementById("btncadastrar")

//Realizar o cadastro ou a atualização quando o botão for pressionado
btncadastrar.onclick = () => {
    if(btncadastrar.value == "Atualizar") {
        fetch("http://localhost:5000/api/v1/contato/atualizar/"+idcont, {
            method:"PUT",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                celular: celular.value,
                residencial: residencial.value,
                email: email.value 
            })
        })
        .then((response)=>response.json())
        .then((dados)=>alert("Atualizado")) 
        .catch((error)=>console.error(error))
        alert("O Contato foi atualizado. Atualize a página")
        window.location.reload()
    } else {
        fetch("http://locahost:5000/api/v1/contato/cadastrar", {
        method:"POST",
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            celular: celular.value,
            residencial: residencial.value,
            email: email.value
        })
    })
    .then((response)=>response.json())
    .then((dados)=>alert(dados)) 
    .catch((error)=>console.error(error))
    alert("A Categoria foi criada. Atualize a página")
    window.location.reload()
    }
}

// exibir as catecorias cadastradas
function exibirContato() {
    let saida = ""
    fetch("http://localhost:5000/api/v1/contato/listar")
    .then((response)=>response.json())
    .then((dados) => {
        dados.map((itens,ix)=>{
            saida += `<tr><td>${itens.idcontato}</td>
            <td>${itens.telefonecelular}</td>
            <td>${itens.telefoneresidencial}</td>
            <td>${itens.email}</td>
            <td>
                <a href=# onclick="atualizar('${itens.idcontato}','${itens.telefonecelular}','${itens.telefoneresidencial}','${itens.email}')">
                Atualizar
                </a>
            </td>
            <td> 
                <a href=# onclick=apagar('${itens.idcontato}')>
                Apagar
                </a>
            </td>
            </tr>`
        })
        document.getElementsByTagName("tbody")[0].innerHTML = saida
    }).catch((error)=>console.error("Erro na api "+error))
}

function atualizar(id, cel, res, em){
    idcont = id    
    celular.value = cel
    residencial.value = res
    email.value = em

    document.getElementById("btncadastrar").value = "Atualizar"


}

function apagar(id){
    fetch("http://localhost:5000/api/v1/contato/apagar/"+id, {method:"DELETE"})
    .then((response)=>response.json())
    .then((dados) => {
        
    }
    ).catch((error)=>console.error("Erro de aplicação"+error))
    alert("O Contato foi apagado. Atualize a página")
    window.location.reload()
}
