class prduct {
    constructor (name,price,brand,malik) {
        this.name = name;
        this.price = price;
        this.brandName = brand;
        this.malik = malik;
    }
    details() {
        console.log(`ami ${this.name} product er details`);
    }
}

const iphone = new prduct ("iPhone" , 1200 , "Apple" , "stib Jobs");
console.log(iphone);
iphone.details()