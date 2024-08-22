//metodos Estatisco
//tudo que e estetico não vai para o objeto quando este e criado



class Calculadora {

    //metodo estetico para somar dois valores

    static somar(a, b) {

        return a + b


    }

    //metodo estetico para subtrair dois valores
    static subtrair(a,b) {

        return a - b

    }


}

console.log(Calculadora.somar(1,2))
console.log(Calculadora.subtrair(2,1))


