//referenciar os controles: input nome, descricao e btncadastrar
let idcat = ""
let nome = document.getElementById("nome")
let descricao = document.getElementById("descricao")
let btncadastrar = document.getElementById("btncadastrar")

//Realizar o cadastro ou a atualização quando o botão for pressionado
btncadastrar.onclick = () => {
    if(btncadastrar.value == "Atualizar") {
        fetch("http://localhost:5000/api/v1/categoria/atualizar/"+idcat, {
            method:"PUT",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                nomecategoria: nome.value,
                descricaocategoria: descricao.value,
            })
        })
        .then((response)=>response.json())
        .then((dados)=>alert("Atualizado")) 
        .catch((error)=>console.error(error))
        alert("A Categoria foi atualizada. Atualize a página")
        window.location.reload()
    } else {
        fetch("http://localhost:5000/api/v1/categoria/cadastrar", {
        method:"POST",
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomecategoria: nome.value,
            descricaocategoria: descricao.value,
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
function exibirCategorias() {
    let saida = ""
    fetch("http://localhost:5000/api/v1/categoria/listar")
    .then((response)=>response.json())
    .then((dados) => {
        dados.map((itens,ix)=>{
            saida += `<tr><td>${itens.idcategoria}</td>
            <td>${itens.nomecategoria}</td>
            <td>${itens.descricaocategoria}</td>
            <td>
                <a href=# onclick="atualizar('${itens.idcategoria}','${itens.nomecategoria}','${itens.descricaocategoria}')">
                Atualizar
                </a>
            </td>
            <td> 
                <a href=# onclick=apagar('${itens.idcategoria}')>
                Apagar
                </a>
            </td>
            </tr>`
        })
        document.getElementsByTagName("tbody")[0].innerHTML = saida
    }).catch((error)=>console.error("Erro na api "+error))
}

function atualizar(id,cat, desc){
    idcat = id    
    nome.value = cat
    descricao.value = desc

    document.getElementById("btncadastrar").value = "Atualizar"


}

function apagar(id){
    fetch("http://localhost:5000/api/v1/categoria/apagar/"+id, {method:"DELETE"})
    .then((response)=>response.json())
    .then((dados) => {
        
    }
    ).catch((error)=>console.error("Erro de aplicação"+error))
    alert("A Categoria foi apagada. Atualize a página")
    window.location.reload()
}
