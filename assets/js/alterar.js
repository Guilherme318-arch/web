
document.addEventListener('DOMContentLoaded',()=>{
alert('ok')


//le o valor do parametro id a partir da url
//exemplo?= http://localhost;5500/alterar.html?id=7
const urlParams= new URLSearchParams(window.location.search)
const id = urlParams.get('id')

//solicita o servidor o produto com id=?

fetch('http://localhost:3000/produtos/'+ id ) 

//converte a resposta  ao formato json
.then(res =>res.json())


//
.then(data => {

if(data.lenght >0){

const produto = data[0]
preencher_formulario(produto)

}else{
alerta_erro(`Erro: Nenhum produto encontrado com id=${id}`)

}


}).catch(() => alerta_erro('erro ao buscar produto com id=${id}'))
})