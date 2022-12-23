function carro (tipo, marca, placa, cor, ano){
    this.tipo = "carro esportivo";
    this.marca = "Ferrari";
    this.placa = "ABCDC";
    this.cor = "Vermelho";
    this.ano = 2010;
    this.ligado = false;
    this.estado = function(valor){
                    this.ligado = valor;
    };
}

var carro = new carro("carro esportivo",
                "Ferrari",
                "ABCDC",
                "Vermelho",
                2010);


carro.estado(true);
console.log(carro.ligado);