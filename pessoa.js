class Pessoa {
    //encapsulamento
    //Propriedades Privadas
    #nome
    #idade
    //variaveis
    cpf = '0000000-00'

    //construtor da classe: chamado por new Pessoa()
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade

    }
    //metodo da classe // esse metodo poderia ter argumentos
    falar() {

        console.log(`ola, meu nome e ${this.nome} e tenho ${this.idade} anos `)


    }

}

//cria objeto     

const pessoa1 = new Pessoa('João', 30)
pessoa1.cpf = '1234751-12'
pessoa1.falar()
console.log(pessoa1.cpf)


const pessoa2 = new Pessoa('Maria', 29)
pessoa2.cpf = '1234567-89'
pessoa2.falar()
console.log(pessoa2.cpf)