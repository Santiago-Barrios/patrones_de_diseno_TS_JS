// component -----------------------------------------------

class ProductComponent {

    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return `${this.name}`;
    }

}


// decorator -----------------------------------------------

class ProductDecorator {

    constructor(productComponent) {
        this.productComponent = productComponent;
    }

    getDetail() {
        return this.productComponent.getDetail();
    }

}

// decorator 1 -----------------------------------------------

class CommercialProductDecorator extends ProductDecorator {

    constructor(productComponent, tradename, brand) {
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail() {
        return `${this.tradename} ${this.brand} ${super.getDetail()}`
    }

}

// decorator 2 -----------------------------------------------

class StoreProductDecorator extends ProductDecorator {

    constructor(productComponent, price) {
        super(productComponent);
        this.price = price;
    }

    getDetail() {
        return `${super.getDetail()} $${this.price}`
    }

}

// decorator 3 -----------------------------------------------

class HTMLProductDecorator extends ProductDecorator {


    getDetail() {
        return `
       <h1>Información del producto</h1>
       <p>
            ${super.getDetail()}
       <p/>
       `
    }

}


// Ejecución y component -----------------------------------------------


const productComponent = new ProductComponent("cerveza");
console.log(`${productComponent.getDetail()}`);

// decorador 1 en componente -----------------------------------------------
const commercialInfoProduct = new CommercialProductDecorator(productComponent, 'poker', 'bavaria');
console.log(commercialInfoProduct.getDetail())


// decorador 2 en componente -----------------------------------------------
const storeProduct = new StoreProductDecorator(productComponent, '2500');
console.log(storeProduct.getDetail())

// decorador 2 en 1 -----------------------------------------------

const product = new StoreProductDecorator(commercialInfoProduct, '2500');
console.log(product.getDetail())

// decorador 3 con decorador 2 en decorador 1 -----------------------------------------------

const htmlProductDecorator = new HTMLProductDecorator(product)
myDiv.innerHTML = htmlProductDecorator.getDetail();