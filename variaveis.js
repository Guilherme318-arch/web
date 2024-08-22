//variaveis ou propriedade estaticas


class Configuracao{


    //propriedade estatica
    static versao = '1.0.0'

    //metodo estatico

    static obterversao(){


        return Configuracao.versao

    }



}

    console.log(Configuracao.versao)
    console.log(Configuracao.obterversao())

