class Presentation {
    constructor(message){
        this.message = String(message);
        this.responsability = "Responsible for delivering and formatting information from the application layer to later!";
    }
    convertData(){
        let qty = this.message.split("").length;
        var index = 0;
        var output = "";
        while (index < qty){
            if (index + 1 > qty) {
                output += this.message[index];
                break;
            } else {
                output += this.message.substring(index, index+2);
                index += 2;
            }
            output += " ";
        }
        return output;

    }
};
module.exports = Presentation;