// 1 criando objeto literal

const pessoal = {
    nome: 'João',
    idade: 30,
    saudacao: function () {

        return `ola meu nome e ${this.nome}`

    }

}


console.log(pessoal.nome)
console.log(pessoal.idade)
console.log(pessoal.saudacao())
//////////1//////////////////////////1/////////////////////1///////////////////////////////

//2 criando um objeto usando o construtor de object()
const pessoa2 = new Object()
console.log(pessoa2)
//acrescenta as propriedade do objeto vazio
pessoa2.nome = 'luiz carlos'
pessoa2.idade = 30
pessoa2.saudacao = function () {

    return `ola meu nome e ${this.nome}`


}

console.log(pessoa2.nome)
console.log(pessoa2.idade)
console.log(pessoa2.saudacao())

///////////2////////////////////////2//////////////////////2/////////////

//3 usando funcao construtora
function Pessoa(nome, idade) {

    this.nome = nome
    this.idade = idade
    this.saudacao = function () {

        return `ola meu nome e ${this.nome}`

    }
}

const joao = new Pessoa('João da silva', 41)
const maria = new Pessoa('Maria da silva', 39)


console.log(joao.nome)
console.log(joao.idade)
console.log(joao.saudacao())
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//4 usando object.create()
//criando um prototipo


let pessoaPrototipo = {

    saudacao: function () {

        return `ola meu nome e ${this.nome}`

    }

}
const rafael = Object.create(pessoaPrototipo)
rafael.nome = 'Rafael da Silva'
rafael.idade = 30

console.log(rafael)
console.log(rafael.saudacao())
