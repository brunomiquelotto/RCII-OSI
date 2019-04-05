class Session {
    constructor() {
        this.message;
        this.responsability;
        this.connection;
        this.controlCommunication;
    }

    setMessage(value) {
        this.message = value
    }
    setResponsability(value) {
        this.responsability = value;
    }
    setConnection(value){
        this.connection = value
    }
    setControlCommunication(value){
        this.controlCommunication = value
    }
}
module.exports = Session;