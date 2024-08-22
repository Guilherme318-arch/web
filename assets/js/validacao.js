//fuction validar_formulario(){}

const validar_formulario = () => {

    const descricao = document.getElementById('descricao').value
    const preco = document.getElementById('preco').value
    const quantidade = document.getElementById('quantidade').value

    if (!descricao) {
        alerta_erro('Faltou campo descricao!')
        return false

    } else if (!preco) {
        alerta_erro('Falotu campo preco!')
        return false

    } else if (!quantidade) {
        alerta_erro('Faltou campo quantidade!')
        return false
    }
 return true

}