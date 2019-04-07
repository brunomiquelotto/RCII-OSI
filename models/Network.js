class Network {

    constructor(){
        this.message;
        this.responsability;
        this.selectRoute;
        this.directPackage;
        this.ipHeader;
        this.tcpHeader;
    }

    setMessage(value){
        this.message = value
    }

    setResponsability(value){
        this.responsability = value
    }

    setSelectRoute (value) {
        this.selectRoute = value;
    }

    setDirectPackage (value) {
        this.directPackage = value;
    }

    setIpHeader(value) {
        this.ipHeader = value;
    }

    setTcpHeader(value) {
        this.tcpHeader = value;
    }

};
module.exports = Network;

