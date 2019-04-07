class Transport {
    constructor(){
        this.message;
        this.responsability;
<<<<<<< HEAD
        this.entregarDados;
        this.segmentarDados;
        this.transmitirDados;
=======
        this.deliverData;
        this.segmentData;
        this.transmitData;
<<<<<<< HEAD
>>>>>>> 9fb7946af3a85e2bb4623a39978d1f0476f77251
=======
        this.tcpHeader;
>>>>>>> 78fb2e96d20db4bfa19f21bdebfc9eb6bc2a16ee
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

<<<<<<< HEAD
    setEntregarDados(value){
        this.EntregarDados = value
    }

    setSegmentarDados(value){
        this.segmentarDados
    }
    
    setTransmitirDados(value){
        this.transmitirDados
    }




=======
    setTcpHeader(value) {
        this.tcpHeader = value;
    }

>>>>>>> 78fb2e96d20db4bfa19f21bdebfc9eb6bc2a16ee
};
module.exports = Transport;

