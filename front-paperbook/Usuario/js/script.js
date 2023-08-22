//referenciar os controles: input nome, descricao e btncadastrar
let idusu = ""
let login = document.getElementById("nome")
let senha = document.getElementById("descricao")
let nivelacesso = document.getElementById("nivelacesso")
let btncadastrar = document.getElementById("btncadastrar")

//Realizar o cadastro ou a atualização quando o botão for pressionado
btncadastrar.onclick = () => {
    if(btncadastrar.value == "Atualizar") {
        fetch("http://10.26.44.57:5000/api/v1/usuario/atualizar/"+idcat, {
            method:"PUT",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                login: login.value,
                senha: senha.value,
                nivelacesso: nivelacesso.value,
            })
        })
        .then((response)=>response.json())
        .then((dados)=>alert("Atualizado")) 
        .catch((error)=>console.error(error))
        alert("O Usuario foi atualizado. Atualize a página")
        window.location.reload()
    } else {
        fetch("http://10.26.44.57:5000/api/v1/usuario/cadastrar", {
        method:"POST",
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            login: login.value,
            senha: senha.value,
            nivelacesso: nivelacesso.value,
        })
    })
    .then((response)=>response.json())
    .then((dados)=>alert(dados)) 
    .catch((error)=>console.error(error))
    alert("O Usuario foi criado. Atualize a página")
    window.location.reload()
    }
}

// exibir as catecorias cadastradas
function exibirUsuarios() {
    let saida = ""
    fetch("http://10.26.44.57:5000/api/v1/usuarios/listar")
    .then((response)=>response.json())
    .then((dados) => {
        dados.map((itens,ix)=>{
            saida += `<tr><td>${itens.idusuario}</td>
            <td>${itens.login}</td>
            <td>${itens.senha}</td>
            <td>${itens.nivelacesso}</td>
            <td>
                <a href=# onclick="atualizar('${itens.idusuario}','${itens.senha}','${itens.nivelacesso}')">
                Atualizar
                </a>
            </td>
            <td> 
                <a href=# onclick=apagar('${itens.idusuario}')>
                Apagar
                </a>
            </td>
            </tr>`
        })
        document.getElementsByTagName("tbody")[0].innerHTML = saida
    }).catch((error)=>console.error("Erro na api "+error))
}

function atualizar(id, log, sen, niv){
    idusu = id    
    login.value = log
    senha.value = sen
    nivelacesso.value = niv

    document.getElementById("btncadastrar").value = "Atualizar"


}

function apagar(id){
    fetch("http://10.26.44.57:5000/api/v1/usuario/apagar/"+id, {method:"DELETE"})
    .then((response)=>response.json())
    .then((dados) => {
        
    }
    ).catch((error)=>console.error("Erro de aplicação"+error))
    alert("O Usuario foi apagado. Atualize a página")
    window.location.reload()
}