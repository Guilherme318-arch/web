class Conta {
    //campo propriedade privada
    #numero
    #saldo
    #titular

    constructor(numero, titular, saldoInicial) {

        this.#numero = numero
        this.#saldo = saldoInicial
        this.#titular = titular


    }
    //getters
    get saldo() {

        return this.#saldo
    }

    get titular() {

        return this.#titular


    }
    get numero() {

        return this.#numero


    }
    //setter
    set titular(titular) {

        this.#titular = titular

    }


    depositar(valor) {

        this.#saldo += valor

    }


    sacar(valorSaque) {


        if (valorSaque <= this.#saldo)
            this.#saldo -= valorSaque
        else
            console.log('***Sem saldo')

    }


    toString() {


        return `Numero: ${this.#numero}  Titular:  ${this.#titular}  Saldo: R$ ${this.#saldo}`


    }



}

//cria objetos

const conta1 = new Conta(1, 'João da Silva', 100)
const conta2 = new Conta(2, 'Maria da Silva', 0)

conta1.depositar(100)
conta2.sacar(150)
conta2.sacar(150)
console.log(conta1.numero)
console.log(conta1.titular)
console.log(conta1.saldo)
console.log(conta2.toString())



conta2.titular = 'Joana Paz'
console.log(conta2.titular)