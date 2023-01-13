
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

class ItemSubject extends Subject {

 constructor() {
    super();
    this.data = [];
  }

  add(item){
      this.data.push(item);
      this.notify(this.data);
  }

}


class HtmlElementObserver {

   constructor(element) {
      this.element = element;
    }

    refresh(data) {
      this.element.innerHTML = data.reduce( (ac, element) => {
         return ac + `
                        <p>
                         ${element}
                        </p>
                     `
      }, "" )
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


const item = new ItemSubject();
const o1 =  new HtmlElementObserver(div1)
const o2 =  new observer( data => {
   div2.innerHTML = data.length ;
} )

item.subscribe(o1);
item.subscribe(o2);

function add (){
    item.add(myText.value);
}