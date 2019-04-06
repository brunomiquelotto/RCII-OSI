class Physical {

    constructor(){
        this.message;
        this.responsability;
        this.bits;
        this.conexao;

    }

    setMessage(value){
        this.message = value
    }

    setResponsability(value){
        this.responsability = value
    }

    setBits(value){
        this.bits = value;
    }
    
    setConexao(value){
        this.conexao = value;
    }

};
module.exports = Physical;

