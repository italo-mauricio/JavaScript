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
    constructor
}