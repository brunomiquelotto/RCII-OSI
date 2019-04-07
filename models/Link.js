class Link {

    constructor(){
        this.message;
        this.responsability;
        this.error;
        this.flow;
        this.macHeader;
        this.ipHeader;
        this.tcpHeader;
    }

    setMessage(value){
        this.message = value
    }

    setResponsability(value){
        this.responsability = value
    }

    setFlow (value) {
        this.flow = value;
    }

    validateError(value){
        if(value === true){
            this.error = "Fixed error."
        }else{
            this.error = "No mistakes in the process."
        }
    }

    setMacHeader(value) {
        this.macHeader = value;
    }

    setIpHeader(value) {
        this.ipHeader = value;
    }

    setTcpHeader(value) {
        this.tcpHeader = value;
    }

};
module.exports = Link;

