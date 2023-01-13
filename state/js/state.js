class DocumentContext {

    constructor() {
        this.content = "";
        this.state =  new BlankState();

    }

    setState(state) {
        this.state =  state;
    }

    write(text) {
        this.state.write(this, text);

    }
}

class BlankState {

    write(documentContext, text) {
        documentContext.content =  text;
        documentContext.setState(new WithContentState())
    }

}


class WithContentState {

    write(documentContext, text) {
        documentContext.content +=  " " + text;
    }

}


class ApproveState {

    write(documentContext, text) {
        console.log('Documento aprobado ya no se modifica');
    }
}


const documentC = new DocumentContext();

console.log(documentC);
documentC.write('pato');
console.log(documentC);
documentC.write('es un animal');
documentC.write('muy lindo');
console.log(documentC);
documentC.setState(new ApproveState());
documentC.write()
console.log(documentC);
