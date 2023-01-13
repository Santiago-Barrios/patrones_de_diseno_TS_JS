

class Form {

    constructor(controls, action) {
        this.controls = controls;
        this.action = action;
    }


    getContent() {
        return `
            <form method="post" action="${this.action}">
                ${this.controls.reduce((ac, c) => {
            return ac + `
                        <div>
                            ${this.getLabel(c)}
                            ${this.getInput(c)}
                        </div>
                    `
        }, "")}

                <button type="submit"> Enviar </button> 
            </form>
        
        `
    }

    getLabel(control) {
        return `<label>${control.text}</label>`
    }

    getInput(control) {
        return `<input 
                    type="${control.type}" 
                    id="${control.name}" 
                    name="${control.name}" 
                />`
    }
}


class FormBuilder {

    constructor() {
        this.reset();
    }

    reset() {
        this.action = "";
        this.controls = [];
    }

    setAction(action) {
        this.action = action;
        return this;
    }

    setText(name, text) {
        this.controls.push({ name, text, type: 'text' });
        return this;
    }

    setEmail(name, text) {
        this.controls.push({ name, text, type: 'email' });
        return this;
    }


    setCheckBox(name, text) {
        this.controls.push({ name, text, type: 'checkbox' });
        return this;
    }

    build() {
        const frm = new Form(this.controls, this.action);
        this.reset();
        return frm;
    }

}


class FormDirector {

    constructor(formBuilder) {
        this.setFormBuilder(formBuilder);
    }

    setFormBuilder(formBuilder) {
        this.formBuilder = formBuilder;
    }

    createPersonForm() {
        this.formBuilder.reset();
        this.formBuilder.setText("firtName", "Nombre")
                        .setText("lastName", "Apellidos")
    }

}


const frmBuilder = new FormBuilder();
const frmPeople = frmBuilder.setAction("add.php")
    .setText("firtName", "Nombre")
    .setText("lastName", "Apellidos")
    .setEmail("Email", "email")
    .setCheckBox("drinker", "Eres bebedor?")
    .build();

form1.innerHTML = frmPeople.getContent();



const frmMail = frmBuilder.setAction("add.php")
    .setText("firtName", "Nombre")
    .setEmail("Email", "email")
    .build();

form2.innerHTML = frmMail.getContent();  

const frmDirector = new FormDirector(frmBuilder);
frmDirector.createPersonForm();
form3.innerHTML = frmBuilder.build().getContent();

frmDirector.createPersonForm();
form4.innerHTML = frmBuilder.build().getContent();
