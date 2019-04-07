class Application {

    constructor(){
        this.message;
        this.responsability;
        this.communicateProcess;
        this.manageNetwork;
        this.shareResources;
        this.networkServices;
        this.serviceDirectory;
        this.specializedFunction;
    }

    setMessage(value){
        this.message = value
    }

    setResponsability(value){
        this.responsability = value
    }

    setCommunicateProcess(value) {
        this.communicateProcess = value;
    }

    setManageNetwork(value) {
        this.manageNetwork = value;
    }

    setShareResources(value) {
        this.shareResources = value;
    }

    setNetworkServices(value) {
        this.networkServices = value;
    }

    setServiceDirectory(value) {
        this.serviceDirectory = value;
    }

    setSpecializedFunction(value) {
        this.specializedFunction = value;
    }

};
module.exports = Application;

