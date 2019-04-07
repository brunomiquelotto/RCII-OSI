class Physical {

    constructor(){
        this.message;
        this.responsability;
        this.bits;
        this.connection;
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

    setConexao(value){
        this.connection = value;
    }

};
module.exports = Physical;

