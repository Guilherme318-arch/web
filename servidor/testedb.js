

import { apagarProduto, atualizarProduto, buscarProdutosPorCategoria, buscarProdutosPorId, inserirProduto, listarProdutos } from "./db.js"
console.log('listando todos os produtos...')
const lista = await listarProdutos()
lista.forEach(item => {
   /*  console.log(item)*/
})


console.log('buscando Produto por id = 2')
const produto = await  buscarProdutosPorId(2)
console.log(produto)

console.log('buscando Produto por categoria = 1')
const produtos = await  buscarProdutosPorCategoria(1)
console.log(produtos)
 

console.log('inserindo um produto')
const p ={


    descricao: 'Barra de Cereais Vegana',
    categoria: 1,
    preco: 19.99,
    quantidade: 5,
    url: 'cereais.png'

}

const inseriu = await inserirProduto(p)
if (inseriu.affecterows == 1){

p.id = inseriu.insertid
console.log(p)
} else {

console.log('erro ao inserir produto')
}

console.log('atualizando produto...')


console.log('inserindo um produto')
const p2 ={

    id:1,
    descricao: 'Barra de Cereais Vegana2',
    categoria: 2,
    preco: 29.99,
    quantidade: 3,
    url: 'cereais2.png'

}
const atualizou = await atualizarProduto(p2)
console.log(atualizou)
console.log(atualizou.affectedRows == 1) //true


console.log('apagando produto...')
const apagou = await apagarProduto(15)
console.log(apagou.affectedRows == 1)