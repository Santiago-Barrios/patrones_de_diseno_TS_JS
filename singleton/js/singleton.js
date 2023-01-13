const log = (param) => console.log(param)



// class Singleton {

//     static getInstance() {
//         return Singleton.instance;
//     }


//     constructor() {

//         this.random = Math.random()

//         if (Singleton.instance) {
//             return Singleton.instance;
//         }
//         Singleton.instance = this;
//     }

// }
// const singleton = new Singleton();
// const singleton2 = new Singleton();
// const singleton3 = new Singleton();
// log(singleton.random)
// log(singleton2.random)
// log(singleton3.random)
// log(singleton === singleton2)
// log(singleton3 === singleton2)


class WeeekDays {

    esDays = [
        "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"
    ]

    enDays = [
        "Monday", "Thursday", "Wenesday", "Tuesday", "Friday", "Saturday", "Monday"
    ]


    constructor(lang) {

        this.lang = lang;


        if (WeeekDays.instance) {
            return WeeekDays.instance;
        }

        WeeekDays.instance = this;

    }
    getDays() {
        return this.lang === "es"
            ? this.esDays
            : this.enDays
    }
}

const days2 = new WeeekDays("en");
const days1 = new WeeekDays("es");

log(days1.getDays())
log(days2.getDays())