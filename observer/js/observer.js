
class Subject {

 constructor(){
    this.observers = [];
 }

 subscribe(observer) {
    this.observers.push(observer);
 }

 unsubcribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
 }

 notify(data) {
    this.observers.forEach( e => {
        e.refresh(data)
    } )
 }

}

class observer {

 constructor(fn) {
    this.fn = fn;
  }
  refresh(data) {
    this.fn(data);
  }
}


const s = new Subject();
const o1 = new observer( ob => console.log("Hola soy el observador " +  ob));
const o2 = new observer( ob =>{ div1.innerHTML = ob});
const o3 = new observer( ob =>{ div2.innerHTML = ob.split("").reverse().join("")});

s.subscribe(o1);
s.subscribe(o2);
s.subscribe(o3);

function change (){
    s.notify(myText.value);
}