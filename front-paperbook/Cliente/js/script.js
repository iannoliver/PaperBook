function carregarClientes() {
    //Varivel para ajudar coms os dados do cliente
    let dados = "";
    fetch("http://10.26.44.57:5000/api/v1/cliente/listar")
    .then((response)=>response.json())
    .then((rs)=>{
        
    })
}