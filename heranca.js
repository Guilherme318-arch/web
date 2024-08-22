
//classe Mãe ou Superclasse
class Animal {

    constructor(nome) {

        this.nome = nome


    }
    //metodo que sera herdado
    falar() {


        console.log(`${this.nome} faz um som`)


    }




}

//Classe Filha
class Cao extends Animal {

    //sobreescrito do metodo
    //sobreescreve o metodo falr da classe mãe

    falar() {

        console.log(`${this.nome}  late: AU AU AU`)



    }

}

class Gato extends Animal {

    //sobreescrever o metodo falar da classe mãe
    falar() {


        console.log(`${this.nome} mia: MEAW MEAW MEAW`)



    }


    arranhar() {


        console.log(`${this.nome} arranhando sofá`)


    }
    comer(){

     this.#comendoisca()



    }
    //metodo privado
  #comendoisca(){
    
    console.log('Gato comendo wyskas...')

  }
}


toto = new Cao('totó')
toto.falar()




tom = new Gato('Tom')
tom.falar()
tom.arranhar()
tom.comer()





//exemplo de polimorfismo
//criando uma array de animais
const animais = [new Animal('xxxx'), new Cao('Scooby'), new Gato('Feliz')]
animais.forEach(Animal => Animal.falar())



