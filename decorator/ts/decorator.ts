interface Component {
  getDetail(): string;
}

class ProductComponent implements Component {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getDetail(): string {
    return `${this.name}`;
  }
}

// decorator
abstract class ProductDecorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  getDetail(): string {
    return this.component.getDetail();
  }
}

// decorator 2

class ComercialInfoProductDecorator extends ProductDecorator {
  private tradename: string;
  private brand: string;

  constructor(component: Component, tradename: string, brand: string) {
    super(component);
    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail(): string {
    return `${this.brand} ${this.tradename} ${super.getDetail()}`;
  }
}


// decorator 3

class StoreProductDecorator extends ProductDecorator {
    private price: string;
  
    constructor(component: Component, price: string) {
      super(component);
      this.price = price;
    }
  
    getDetail(): string {
      return `${super.getDetail()} ${this.price}`;
    }
  }


// decorator 4

class HTMLProductDecorator extends ProductDecorator {
    getDetail(): string {
      return `
      <h1> Información del producto </h1>
      <p> ${ super.getDetail() }  </p>
      `;
    }
  }


const productComponent = new ProductComponent("cerveza");
console.log(productComponent.getDetail());

// decorador 1 con component
const comercialInfoProductDecorator = new ComercialInfoProductDecorator(
    productComponent, 'poker', 'bavaria');
console.log(comercialInfoProductDecorator.getDetail());

// decorador 2 con component
const storeProductDecorator = new StoreProductDecorator(
    productComponent, '2500');
console.log(storeProductDecorator.getDetail());


// decorador 2 en decorador 1 que a su vez decora componet
const storeProductDecorator2 = new StoreProductDecorator(
    comercialInfoProductDecorator, '2500');
console.log(storeProductDecorator2.getDetail());

// decorador4

const htmlProductDecorator = new HTMLProductDecorator(
    storeProductDecorator2);
console.log(htmlProductDecorator.getDetail());
