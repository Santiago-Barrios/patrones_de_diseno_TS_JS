

interface ListImplementor {
    elements: number[];

    add(number:number):void;
    getElements(): number[];
}


class OrderedList implements ListImplementor {
    elements: number[] = [];

    public add(number: number): void {
        this.elements.push(number);
        this.elements.sort();
    }

    public getElements(): number[] {
        return this.elements;
    }
}




class UniqueList implements ListImplementor {
    elements: number[] = [];

    public add(number: number): void {
        if(!this.elements.includes(number)){
            this.elements.push(number);
        }
    }

    public getElements(): number[] {
        return this.elements;
    }
}

interface DataAbstraction {

    implementor: ListImplementor;
    add(number: number): void;
    get(): number[];
    operation(fn: (n:number) => number): number[];

}


class DataRefindAbstraction implements DataAbstraction {
    implementor: ListImplementor;
    constructor(implementor: ListImplementor){
        this.implementor = implementor;
    }

    public add(number: number): void {
        this.implementor.add(number);
    }

    public get(): number[] {
       return  this.implementor.getElements();
    }

    public operation(fn: (n: number) => number): number[] {
        return this.implementor.getElements().map(fn);
    }
}

const uniqueData =  new DataRefindAbstraction(new UniqueList());
const orderData =  new DataRefindAbstraction(new OrderedList());
uniqueData.add(2);
uniqueData.add(3);
uniqueData.add(4);
uniqueData.add(4);
uniqueData.add(4);
console.log(uniqueData.get());

orderData.add(3);
orderData.add(3);
orderData.add(1);
orderData.add(1);
orderData.add(2);
console.log(orderData.get());

const uniqueItems = uniqueData.operation((e:number) => e * 2);
const orderedItems = orderData.operation((e:number) => e * 2);
console.log(uniqueItems);
console.log(orderedItems);




