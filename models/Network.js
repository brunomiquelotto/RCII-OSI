class Network {

    constructor(){
        this.message;
        this.responsability;
        this.selecionarRota;
        this.direcionarPacote;
    }

    setMessage(value){
        this.message = value
    }

    setResponsability(value){
        this.responsability = value
    }

    setSelecionarRota(value){
        this.selecionarRota = value
    }

    setDirecionarPacote(value){
        this.direcionarPacote = value;
    }

};
module.exports = Network;

