class Link {

    constructor(){
        this.message;
        this.responsability;
        this.error;
        this.flow;
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

};
module.exports = Link;

