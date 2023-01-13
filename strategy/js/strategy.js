class SaleContext {
    constructor(strategy) {
        this.strategy = strategy
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    calculate(amount) {
        return this.strategy.calculate(amount);
    }
}


class RegularSale {
    constructor(tax) {
        this.tax = tax
    }
    calculate(amount) {
        return amount + (amount * this.tax);
    }
}


class DiscountSale {
    constructor(tax, discuount) {
        this.tax = tax;
        this.discuount = discuount;
    }
    calculate(amount) {
        return amount + (amount * this.tax) - (amount * this.discuount);
    }
}


class ForeingChange {

    getDollarChangeColombia() {
        return 4500;
    }

    calculate(amount) {
        return amount * this.getDollarChangeColombia();
    }
}

// const regularSale = new RegularSale(0.16)
// const saleContext = new SaleContext(regularSale);
// const discountSale = new DiscountSale(0.16, 0.20);
// const foreingChange = new ForeingChange();
// console.log(saleContext.calculate(10));

// saleContext.setStrategy(discountSale);

// console.log(saleContext.calculate(10));

// saleContext.setStrategy(foreingChange);

// console.log(saleContext.calculate(10));

// Explicación práctica ----------------------------------------------- 
const data = [
{
    name: "Erdinger Pikantus",
    country: "Alemania",
    info: "Erdinger Pikantus es una cerveza de estilo weizenbock elaborada en la localidad bávara de Erding.",
    img: "https://w7.pngwing.com/pngs/101/35/png-transparent-beer-icon-design-icon-beer-clear-glass-beer-mug-with-beer-food-beer-bottle-pint-glass.png"
},
{
    name: "Corona",
    country: "México",
    info: "La cerveza Corona es una marca mundialmente conocida, distribuida a lo largo de más de 159 países en los cinco continentes.",
    img: "https://w7.pngwing.com/pngs/101/35/png-transparent-beer-icon-design-icon-beer-clear-glass-beer-mug-with-beer-food-beer-bottle-pint-glass.png"
},
{
    name: "Delirium Tremens",
    country: "Bélgica",
    info: "Esta pale ale tiene una efervescencia fina con un toque un tanto picante. Al tomarse, calienta el paladar y deja un sabor fuerte y de un amargor seco.",
    img: "https://w7.pngwing.com/pngs/101/35/png-transparent-beer-icon-design-icon-beer-clear-glass-beer-mug-with-beer-food-beer-bottle-pint-glass.png"
}];

class InfoContext {

 constructor(strategy, data, element){
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
 }

 setStrategy(strategy){
    this.strategy = strategy;  
 }

 show(){
    this.strategy.show(this.data, this.element);
 }
}

class ListStrategy {

 show(data, element){
    element.innerHTML = data.reduce( (acumulator, item) => {
        return acumulator + `<div>
                                <h2> ${item.name}  </h2> 
                                <p> ${item.country} </p> 
                             </div>
                             <hr>`
    }, "")
 }
}

class ListOptionsStrategy {
    show(data, element){
       element.innerHTML = data.reduce( (acumulator, item) => {
           return acumulator + `<div>
                                   <h2> ${item.name}  </h2> 
                                   <p> ${item.country} </p> 
                                   <p> ${item.info} </p> 
                                   <img  width="500" height="600" src="${item.img}"> 
                                </div>
                                <hr>`
       }, "")
    }
   }

const strategies = [
    new ListStrategy(),
    new ListOptionsStrategy()
]

const info = new InfoContext( new ListStrategy, data, content);
info.show( )

slcOptions.addEventListener("change", (event) => {
    const op = event.target.value;
    info.setStrategy(strategies[op]);
    info.show();
})
