

    function repetidos(array){
        resultados = [];
        numerosVistos = [];

        array.forEach(numeroABuscar => {
            if(!numerosVistos.includes(numeroABuscar)){
                let cuenta = 0;
                array.forEach(numero => {
                    if(numero === numeroABuscar){
                        cuenta++;
                    }
                })
                resultados.push(cuenta)
                numerosVistos.push(numeroABuscar);
            }
        });
        return resultados
    }

    console.log(repetidos([2,3,2,2]))
    console.log(repetidos([1,1,1]))
    console.log(repetidos([2,3,3,2]))