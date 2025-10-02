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


// ================Constructor কী?

// JavaScript এ constructor হলো একটা special method, যেটা class এর ভেতরে define করা হয়।

// এর কাজ হলো object বানানোর সময় প্রথমে call হওয়া।

// constructor সাধারণত object এর initial value (প্রাথমিক মান) সেট করার জন্য ব্যবহার করা হয়।

class Student {
  constructor(name, age) {
    this.name = name; // object এর name property
    this.age = age;   // object এর age property
  }
}

const s = new Student("Rahim", 20);
console.log(s); // Student { name: "Rahim", age: 20 }
// এখানে constructor-এর কাজ হচ্ছে, যখন new Student("Rahim", 20) লেখা হলো, তখন ,constructor চালু হলো,
// আর this.name = name এবং this.age = age এর মাধ্যমে object এ মান বসিয়ে দিলো।


// ===============this কী?

// this হলো একটা keyword যেটা object-এর ভেতরে সেই object-কে বোঝায়।
// মানে, this সবসময় বর্তমান object কে নির্দেশ করে।