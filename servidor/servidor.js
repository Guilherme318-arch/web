

import {buscarProdutosPorId, listarProdutos,buscarProdutosPorCategoria, apagarProduto, inserirProduto, atualizarProduto} from './db.js'
import express from 'express'
import bodyParser from 'body-parser'

//80 e a porta padrao http
const port = 3000
//instancia o servidor
const server = express()


server.use(express.json())
server.use(bodyParser.urlencoded ({ extended : true} ) )

server.use((req,res,next) => {

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization')
    res.setHeader('Access-Control-Allow-Methods','Content-Type', 'Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    next()





})

//metodo http
//metodo get:localhost:3000/
server.get('/', async (req, res) => {
return res.status(200).send('<h1>Bem vindo a API Rest<h1>')


})
//rotas, routes ou endpoints => 'links' (ou url) de acesso a API Rest
//metodo Get: localhost:3000/produtos
server.get('/produtos', async(req,res)=>{

const produtos = await listarProdutos()
console.log(produtos)
 return res.status(200).json(produtos)

})

//retorna um produto por id
//metodo GET : localhost:3000/produtos/1
server.get('/produtos/:id',async(req,res) => {
const{id} = req.params
const produtos = await buscarProdutosPorId(id)
return res.status(200).json(produtos)


})

//lista produtos por categoria
//metodo GET: localhost:3000/produtos/categoria/0

server.get('/produtos/categoria/:categoria', async(req,res) => {
const {categoria} = req.params
const produtos = await buscarProdutosPorCategoria(categoria)
return res.status(200).json(produtos)


})

//apaga um produto por id
// metodo DELETE: localhost:3000/produtos/1

server.delete('/produtos/:id', async(req,res)=> {

const{id} = req.params
const retorno = await apagarProduto(id)
return res.status(200).json({'retorno': retorno.affectedRows == 1})


})

//salva um produto
//metodo Post: localhost:3000/produtos

server.post('/produtos', async(req,res)=>{

const produto = req.body
console.log(produto)
const retorno = await inserirProduto(produto)
return res.status(200).json ({'retorno' : retorno.affectedRows == 1})



})

//atualiza produtos
//metodos PUT: localhost:3000/produtos
server.put('/produtos', async (req,res) =>{

const produto = req.body
const retorno = await atualizarProduto(produto)
return res.status (200).json({'retorno':retorno.affectedRows == 1})


})

//inicia a execucao do servidor na porta 3000 

server.listen(port, ()=>{
console.log(`servidor executando na porta ${port}`)
})

