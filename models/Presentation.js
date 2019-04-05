class Presentation {
    constructor(){
        this.message;
        this.responsability;
        this.encriptData;
        this.codeData;
        this.formatData;
        this.convCharacters;
    }
    setMessage(value){
        this.message = value
    }
    setResponsability(value){
        this.responsability = value;
    }

    setEncryptData(value){
        this.encriptData = value;
    }
    setCodeData(value){
        this.codeData = value;
    }
    setFormatData(value){
        this.formatData = value;
    }
    setConvCharacters(value){
        this.convCharacters = value;
    }
    convertData(message){
        message = String(message)
        let qty = message.split("").length;
        var index = 0;
        var output = "";
        while (index < qty){
            if (index + 1 > qty) {
                output += message[index];
                break;
            } else {
                output += message.substring(index, index+2);
                index += 2;
            }
            output += " ";
        }
        return output;

    }
};
module.exports = Presentation;