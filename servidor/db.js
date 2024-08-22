//importa o modulo do  mysql//
import mysql from 'mysql2/promise'

async function conectar() {
    if (global.conexao && global.conexao.state != 'disconnected')
        return global.conexao
    //criar uma conexão com o banco de dados//
    const conexao = mysql.createConnection({

        user: 'root',
        password: 'softgraf',
        host: 'localhost',
        port: 3306,
        database: 'mundoverde',

    })


    console.log('conectou a um mysql')
    //objeto de acesso global//
    global.conexao = conexao
    //retorna a conexão//]
    console.log("**********" + conexao)
    return conexao;
}

export async function listarProdutos() {
    //obtem a conexao 
    const con = await conectar()
    const sql = 'SELECT * FROM Produtos'
    const [dados] = await con.query(sql)
    return dados

}





export async function buscarProdutosPorId(id) {
    const con = await conectar();
    const sql = 'select * FROM produtos WHERE id=?'
    /*obtem somente o 1 item da lista*/
    const [produto] = await con.query(sql, id)
    return produto

}

export async function buscarProdutosPorCategoria(categoria) {
    const con = await conectar();
    const sql = 'select * FROM produtos WHERE categoria=?'
    /*obtem somente o 1 item da lista*/
    const [lista] = await con.query(sql, categoria)
    return lista
}


export async function inserirProduto(produto) {

    const con = await conectar()
    const sql = 'INSERT INTO Produtos (descricao, categoria ,preco , quantidade, url) VALUES (?,?,?,?,?)'
    const valores = [produto.descricao, produto.categoria, produto.preco, produto.quantidade, produto.url]
    const retorno = await con.query(sql, valores)

    return retorno[0]
}


export async function atualizarProduto(produto){

const con = await conectar()
const sql = 'UPDATE Produtos SET descricao=?,categoria=?, preco=?, quantidade=?, url=? WHERE id=?'
const valores = [produto.descricao, produto.categoria, produto.preco, produto.quantidade, produto.url,produto.id]
const retorno = await con.query(sql, valores)

return retorno[0]

}

export async function apagarProduto(id){

const con = await conectar()
const sql = 'DELETE FROM Produtos WHERE id=?'
const retorno = await con.query(sql,id)
return retorno [0]

}