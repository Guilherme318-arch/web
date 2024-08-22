
const tipo_categoria = ["Cereais", "Suplementos", "Temperos"]

document.addEventListener("DOMContentLoaded", () => {

    //solicita ao servidor a lista de produtos via metodo GET
    fetch('http://localhost:3000/produtos')


        //converte a resposta em formato json
        .then(res => res.json())

        //procede os dados da resposta
        .then(dados => {
            if (dados.length == 0)
                alerta_erro('Nenhum produto encontrado no banco de dados')
            else
                adicionarNaTabela(dados)


        }).catch(erro => alerta_erro(`Erro ao consultar produtos:${erro}`))
})

//funcao para mostrar todos os produtos retornados pelo servidor na tabela
const adicionarNaTabela = (dados) => {
    const tabela = document.getElementById('tabela')
    console.log(dados)

    dados.forEach(produto => {
        //calcula o numero de linha atual da tabela )inicial = 0)
        const tamanhoTabela = tabela.rows.length
        //insere a celula
        const linha = tabela.insertRow(tamanhoTabela)

        const id = linha.insertCell(0)  //posicao = 0
        const descricao = linha.insertCell(1)
        const categoria = linha.insertCell(2)
        const preco = linha.insertCell(3)
        const quantidade = linha.insertCell(4)
        const imagem = linha.insertCell(5)
        const alterar = linha.insertCell(6)
        const excluir = linha.insertCell(7)
        //adicione o id no elemento a ser criado
        linha.id = produto.ID

        //prenche as celulas de cada linha da tabela
        id.innerHTML = produto.ID
        descricao.innerHTML = produto.descricao
        categoria.innerHTML = tipo_categoria[produto.CATEGORIA]
        preco.innerHTML = produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'brl' })
        quantidade.innerHTML = produto.QUANTIDADE
        const url = produto.URL.toLowerCase()
        //imagem da web
        if (url.substring(0, 4) == 'http')
            imagem.innerHTML = `<img src='${url}' width='100' alt = 'Foto do Produto' class='img-thumbnail'>`
        else
            imagem.innerHTML = `<img src='galeria/${url}' width='100' alt = 'Foto do Produto' class='img-thumbnail'>`
        alterar.innerHTML = `<a href='alterar.html?id=${produto.id}'class ='btn btn-outline-success mt-4'>Alterar</a>`


        excluir.innerHTML = `<button onclick='excluirDaTabela(${produto.ID})' class='btn btn-outline-danger mt-4'>Excluir</button>`


    });



}

//excluir uma linha da tabela e do banco de dados pelo id 
const excluirDaTabela = (id) => {

    fetch('http://localhost:3000/produtos/' + id, {
        method: 'DELETE'
    }).then(() => document.getElementById(id).remove())
        .catch(erro => alerta_erro(`'Erro ao excluir produto: ${erro}'`))


}