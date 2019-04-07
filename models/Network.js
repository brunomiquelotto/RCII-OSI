class Network {

    constructor(){
        this.message;
        this.responsability;
        this.selectRoute;
        this.directPackage;
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

};
module.exports = Network;

