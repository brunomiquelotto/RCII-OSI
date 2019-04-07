class Transport {
    constructor(){
        this.message;
        this.responsability;
        this.deliverData;
        this.segmentData;
        this.transmitData;
        this.tcpHeader;
    }

    setMessage(value){
        this.message = value;
    }

    setResponsability(value){
        this.responsability = value;
    }

    setDeliverData(value){
        this.deliverData = value;
    }

    setSegmentData(value){
        this.segmentData = value;
    }
    
    setTransmitData(value){
        this.transmitData = value;
    }

    setTcpHeader(value) {
        this.tcpHeader = value;
    }

};
module.exports = Transport;

