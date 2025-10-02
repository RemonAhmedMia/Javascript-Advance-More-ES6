// Class কি?
// JavaScript-এ class হলো একটি template বা নকশা, যেটা দিয়ে object বানানো যায়।
// মানে, class হলো একটা blueprint (নকশা), আর object হলো তার বাস্তব রূপ।



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

const xiaomi = new prduct ("Redmi" , 1000 , "xiaomi" , "Rimo");
console.log(xiaomi);
xiaomi.details()

// Example-02================

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // method
  showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// object বানানো
const s1 = new Student("Rahim", 20);
const s2 = new Student("Karim", 22);

s1.showInfo(); // Name: Rahim, Age: 20
s2.showInfo(); // Name: Karim, Age: 22
