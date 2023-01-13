class EncoderTextAbstraction {

    constructor(encoder) {
        this.encoder = encoder;
    }

    encode(str) {
        return this.encoder.encode(str);
    }


    decode(str) {
        return this.encoder.decode(str);
    }

}

class Base64EncoderImplementation {


    encode(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }
 

    decode(str) {
        return decodeURIComponent(escape(window.atob( str )));
    }
}


class HTMLEncoderImplementor {


    encode(str) {
        return str.split(".").reduce((ac, e) => {
            return ac + `<p>${e.trim()}</p>`
        }, "")
    }
 

    decode(str) {
         return str.split("</p>").reduce((ac, e) => {
            return e !== "" 
                        ? ac + e.replace("<p>", "") + ". "
                        : ac + "";
        }, "") 
    }
}


const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementation());
console.log(encoder1.encode('pato'));
console.log(encoder1.decode("cGF0bw=="));


const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
console.log(encoder2.encode('soy un muy buen desarrollador. Y voy a ser una gran persona'));
console.log(encoder2.decode('<p>soy un muy buen desarrollador</p><p>Y voy a ser una gran persona</p>'));
