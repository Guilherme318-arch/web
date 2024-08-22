
//funcao para enviar dados do formulario via metodo: Post



//fuction salvar {}()
const salvar = () => {

    if(!validar_formulario())
    return

    const dados = {
        descricao: document.getElementById('descricao').value,
        categoria: parseInt(document.getElementById('categoria').value),
        preco: parseFloat(document.getElementById('preco').value.replace(',', '.')),
        quantidade: parseInt(document.getElementById('quantidade').value),
        url: document.getElementById('url').value,

    }



    console.log("dados enviados ao servidor:\n", dados)

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'


        },
        //converte objeto javascipt em string para poder enviar
        body: JSON.stringify(dados)

        //apos enviar, recebe a resposta do servidor em formato string
        //entao converte em objeto json

    }).then(res => res.json()


    ).then(data => {
        console.log("retorno do servidor:\n", data)

    }).then(() => {
        console.log("sucesso ao cadastrar produto:")
        location.href = 'index.html'


    }).catch(erro => alerta_erro(`Erro ao cadastrar produtos: ${erro}`))


}