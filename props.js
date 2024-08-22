


    //propriedade e metodos dos objetos


    const calculadora = {


        //propriedade:chava (key): valor (value)
        tipo: 'cientifica',
        marca: 'Cassio',



        //metodos  = sao funcao que fazem parte do objeto

        somar: function(a,b){
            
            return  a+b

        },

        subtrair: function(a,b){

            return a-b

        }
    }

//mostrando as propriedades
    console.log(calculadora.tipo)
    console.log(calculadora.marca)

    //executando as propriedades

    console.log(calculadora.somar(5,3))
    console.log(calculadora.subtrair(5,3))



