class veiculo{
    constructor(){
        super();
        this.marca = "";
        this.placa = "";
        this.modelo = "";
        this._ligado = false;
    }
    get isLigado(){
        return this._ligado;
    }
    set ligado(flag){
        this._ligado = flag;
    }
    static marcas(){
        return ["Ford", "Fiat", "BMW"];
    }
    toString(){
        return "Marca: "
            + this.marca + "\r\n"
            + "Mode: "
            + this.modelo + "\r\n"
            + "Placa: "
            + this.placa + "\r\n"
    }
}

class Carro extends Veiculo {
    constructor (marca, placa, modelo){
        super();
        this.marca = marca;
        this.placa = placa;
        this.modelo = modelo;
    }
    ligar(){
        super.ligado = true;
    }
    desligar(){
        super.ligado = false;
    }
    toString(){
        return super.toString()
                + "Ligad: "
                + this.isLigado
                + "\r\n"
    }
}


console.log(Veiculo.marcas());
let c = new Carro("Fiat", "XPTO 5555", "Bravo");
c.ligar();
console.log(c.toString());