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

class Studnt {
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
const s1 = new Studnt("Rahim", 20);
const s2 = new Studnt("Karim", 22);

s1.showInfo(); // Name: Rahim, Age: 20
s2.showInfo(); // Name: Karim, Age: 22


// ================Constructor কী?

// JavaScript এ constructor হলো একটা special method, যেটা class এর ভেতরে define করা হয়।

// এর কাজ হলো object বানানোর সময় প্রথমে call হওয়া।

// constructor সাধারণত object এর initial value (প্রাথমিক মান) সেট করার জন্য ব্যবহার করা হয়।

class Stdent {
  constructor(name, age) {
    this.name = name; // object এর name property
    this.age = age;   // object এর age property
  }
}

const s = new Stdent("Rahim", 20);
console.log(s); // Student { name: "Rahim", age: 20 }
// এখানে constructor-এর কাজ হচ্ছে, যখন new Student("Rahim", 20) লেখা হলো, তখন ,constructor চালু হলো,
// আর this.name = name এবং this.age = age এর মাধ্যমে object এ মান বসিয়ে দিলো।


// ===============this কী?

// this হলো একটা keyword যেটা object-এর ভেতরে সেই object-কে বোঝায়।
// মানে, this সবসময় বর্তমান object কে নির্দেশ করে।

class chatro {
  constructor(name, age) {
    this.name = name; // এখানে this মানে হলো নতুন Student object
    this.age = age;
  }

  showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const chatro1 = new chatro("Rahim", 20);
const chatro2 = new chatro("Karim", 22);

chatro1.showInfo(); // Name: Rahim, Age: 20
chatro2.showInfo(); // Name: Karim, Age: 22


// এখানে this.name মানে হলো সেই object-এর name property

// যখন chatro1.showInfo() চালানো হলো → তখন this মানে হলো chatro1
// যখন chatro2.showInfo() চালানো হলো → তখন this মানে হলো chatro2

// ============================
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;   // this মানে হলো যে object বানাচ্ছি
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner} জমা দিলো ${amount}, এখন ব্যালেন্স: ${this.balance}`);
  }
}

const acc1 = new BankAccount("Rahim", 5000);
const acc2 = new BankAccount("Karim", 2000);

acc1.deposit(1000); // Rahim জমা দিলো 1000, এখন ব্যালেন্স: 6000
acc2.deposit(500);  // Karim জমা দিলো 500, এখন ব্যালেন্স: 2500

// += হলো শর্টহ্যান্ড অপারেটর (short form)।
// এর মানে হচ্ছে → আগের মানের সাথে নতুন মান যোগ করে আবার সেট করো।

let x = 10;
x += 5;   // x = x + 5
console.log(x); // 15
