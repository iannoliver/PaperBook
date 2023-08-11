//referenciar os controles: input nome, descricao e btncadastrar
let idcar = ""
let titulo = document.getElementById("titulo")
let salario = document.getElementById("salario")
let beneficio = document.getElementById("beneficio")
let cargahoraria = document.getElementById("cargahoraria")
let btncadastrar = document.getElementById("btncadastrar")

//Realizar o cadastro ou a atualização quando o botão for pressionado
btncadastrar.onclick = () => {
    if(btncadastrar.value == "Atualizar") {
        fetch("http://10.26.44.57:5000/api/v1/cargo/atualizar/"+idcar, {
            method:"PUT",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                titulocargo: titulo.value,
                salario: salario.value,
                beneficio: beneficio.value,
                cargahorariacargo: cargahoraria.value,
            })
        })
        .then((response)=>response.json())
        .then((dados)=>alert("Atualizado")) 
        .catch((error)=>console.error(error))
        alert("O Cargo foi atualizado. Atualize a página")
        window.location.reload()
    } else {
        fetch("http://10.26.44.57:5000/api/v1/cargo/cadastrar", {
        method:"POST",
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            titulocargo: titulo.value,
            salario: salario.value,
            beneficio: beneficio.value,
            cargahoraria: cargahoraria.value,
        })
    })
    .then((response)=>response.json())
    .then((dados)=>alert(dados)) 
    .catch((error)=>console.error(error))
    alert("O Cargo foi criado. Atualize a página")
    window.location.reload()
    }
}

// exibir as catecorias cadastradas
function exibirCargos() {
    let saida = ""
    fetch("http://10.26.44.57:5000/api/v1/cargo/listar")
    .then((response)=>response.json())
    .then((dados) => {
        dados.map((itens,ix)=>{
            saida += `<tr><td>${itens.idcargo}</td>
            <td>${itens.titulocargo}</td>
            <td>${itens.salario}</td>
            <td>${itens.beneficio}</td>
            <td>${itens.cargahoraria}</td>
            <td>
                <a href=# onclick="atualizar('${itens.idcargo}','${itens.titulocargo}','${itens.salario}','${itens.beneficio}','${itens.cargahoraria}')">
                Atualizar
                </a>
            </td>
            <td> 
                <a href=# onclick=apagar('${itens.idcargo}')>
                Apagar
                </a>
            </td>
            </tr>`
        })
        document.getElementsByTagName("tbody")[0].innerHTML = saida
    }).catch((error)=>console.error("Erro na api "+error))
}

function atualizar(id, tit, sal, ben, cargah){
    idcar = id    
    titulo.value = tit
    salario.value = sal
    beneficio.value = ben
    cargahoraria.value = cargah

    document.getElementById("btncadastrar").value = "Atualizar"


}

function apagar(id){
    fetch("http://10.26.44.57:5000/api/v1/carga/apagar/"+id, {method:"DELETE"})
    .then((response)=>response.json())
    .then((dados) => {
        
    }
    ).catch((error)=>console.error("Erro de aplicação"+error))
    alert("A Carga foi apagada. Atualize a página")
    window.location.reload()
}
