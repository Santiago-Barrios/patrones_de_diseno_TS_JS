
// coponent
class ClientComponent {

    constructor(url) {
        this.url = url;
    }

    async getData() {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
    }
}


// decorator

class ClientDecorator {

    constructor(clientComponent) {
        this.clientComponent = clientComponent;
    }

    async getData() {
        return await this.clientComponent.getData();
    }

}

// decortor 1

class UpperCaseClientDecorator extends ClientDecorator {

    constructor(clientComponent){
        super(clientComponent);
    }

    async getData() {
         const data = await super.getData();
         const newData =  data.map( e => {
            e.title = e.title.toUpperCase();
            return e;
         } ) ;

         return newData;
    }
}

// decorator 2

class HTMLClientDecorator extends ClientDecorator {


    async getData() {
        const data = await super.getData();
        const newData =  data.map( e => {
            e.title = `<h1> ${e.title} </h1>`;
            e.thumbnailUrl = `<img src='${e.thumbnailUrl}' >`
            return e;
         } ) ;

         return newData;
    }

}


( async ()=>{

    const url = "https://jsonplaceholder.typicode.com/photos";
    const clientComponent  = new ClientComponent(url);
    const data = await clientComponent.getData();
    console.log(data) 

    const upperClient = new UpperCaseClientDecorator(clientComponent)
    const data2 = await upperClient.getData();
    console.log(data2)


    const htmlClient = new HTMLClientDecorator(upperClient);
    const htmlClient2 = new HTMLClientDecorator(clientComponent);
    const data3 = await htmlClient.getData();
    console.log(data3)
    content1.innerHTML = data3.reduce( (ac, e) => {
        return ac + e.title + e.thumbnailUrl;
    }, "" ); 

    const data4 = await htmlClient2.getData();
    console.log(data4);
    content2.innerHTML = data4.reduce( (ac, e) => {
        return ac + e.title + e.thumbnailUrl;
    }, "" ); 
} )();