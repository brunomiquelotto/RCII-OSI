class Physical {

    constructor(){
        this.message;
        this.responsability;
        this.bits;
<<<<<<< HEAD
        this.conexao;
=======
        this.connection;
>>>>>>> 9fb7946af3a85e2bb4623a39978d1f0476f77251

    }

    setMessage(value){
        this.message = value;
    }

    setResponsability(value){
        this.responsability = value;
    }

    setBits(){
        const input = String(this.message);
        var length = input.length,
            output = [];
        for (var i = 0;i < length; i++) {
            var bin = input[i].charCodeAt().toString(2);
            output.push(Array(8-bin.length+1).join("0") + bin);
        }
        this.bits = output.join(" ");
    }

    setConexao(value){
        this.connection = value;
    }

    setConnection(value){
       this.connection = value;
    }

    setBits(value){
        this.bits = value;
    }
    
    setConexao(value){
        this.conexao = value;
    }

};
module.exports = Physical;

