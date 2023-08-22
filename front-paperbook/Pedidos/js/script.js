function carregarDados() {
    
    let lstpedidos = document.getElementById("lstPedidos")
    let dados = ""

    fetch("http://localhost:5000/api/v1/pedido/listar")
    .then((response)=>response.json())
    .then((rs)=>{
        console.log(rs)
        rs.map((itens, ix)=>{
            dados += `<ul id="itempedido">
                        <li>${itens.idpedido}</li>
                        <li>${itens.loja}</li>
                        <li>${itens.unidadeloja}</li>
                        <li>${itens.numeroprotocolo}</li>
                        <li>${itens.valortotalpedido}</li>
                        </ul>`
                        lstpedidos.innerHTML += dados
                                
        })
    }).catch((err)=>console.error(err))
}