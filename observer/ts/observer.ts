interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubjet<T> {
  observers: IObserver<T>[];

  subscribe(observer: IObserver<T>): void;
  unSubscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

class Subject<T> implements ISubjet<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>) {
    this.observers.push(observer);
  }

  unSubscribe(observer: IObserver<T>) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(value: T) {
    this.observers.forEach((e) => {
      e.refresh(value);
    });
  }
}

class Observer<T> implements IObserver<T> {

  private fn: (value: T) => void;

  constructor(fn: (value : T) => void) {
    this.fn = fn;
  }

  refresh(value: T): void {
      this.fn(value);
  }
}


const subject  = new Subject<number>();
const o1  = new Observer<number>( (n) => {
    console.log('Hello ' + n )
} );

subject.subscribe(o1);
subject.notify(1.2);


const subject2  = new Subject<string>();
const o2  = new Observer<string>( (n) => { 
    console.log( `${n.toUpperCase()}` )
} );

subject2.subscribe(o2);
subject2.notify('santiago');

