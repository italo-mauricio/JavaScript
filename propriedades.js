
var carro = {

    tipo: "Carro esportivo",
    marca: "Ferrari",
    cor: "Azul",
    placa: "123SDAW",
    ano: 2010,
    ligado: false,
    estado: function(valor){
        this.ligado = valor;
    }
                
}

console.log(carro.ligado);
carro.estado(false);
console.log(carro.ligado);

