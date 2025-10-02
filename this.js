class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`${this.name} Sleep At 11Pm`);
        
    }
}

const solim = new Person("Solim" , 45);
console.log(solim);

solim.sleep()

// Encapsulation কী?
// Encapsulation মানে হলো:

// Object-এর data (property) এবং method-কে এক জায়গায় লুকানো বা গঠন করা।
// অন্য object বা user সরাসরি সেই data পরিবর্তন করতে পারবে না, বরং method-এর মাধ্যমে access করতে হবে।
// উদ্দেশ্য:

// Data hide করা → কেউ সরাসরি property পরিবর্তন করতে পারবে না।
// Security এবং integrity বজায় রাখা।
// Object-এর behavior ঠিক রাখা।
// **rivate property করার জন্য # ব্যবহার করা হয়।

class Persons {
    #age;  // private property

    constructor(name, age) {
        this.name = name; 
        this.#age = age; 
    }

    // getter
    getAge() {
        return this.#age;
    }

    // setter
    setAge(newAge) {
        if (newAge > 0) {
            this.#age = newAge;
        } else {
            console.log("Age must be positive!");
        }
    }

    showInfo() {
        console.log(`Name: ${this.name}, Age: ${this.#age}`);
    }
}

const korim = new Persons("korim", 45);
korim.showInfo(); // Name: korim, Age: 45

korim.setAge(50); 
korim.showInfo(); // Name: korim, Age: 50

korim.setAge(-10); // Age must be positive!
korim.showInfo(); // Name: korim, Age: 50


// Key Points:
// Feature	Explanation
// #property	private property, বাইরে access করা যাবে না
// Getter method	private property পড়ার জন্য
// Setter method	private property update করার জন্য, validation সহ


// সহজভাবে মনে রাখো:

// Encapsulation = data hiding + controlled access

// Public property = কেউ সরাসরি change করতে পারে

// Private property = method দিয়ে নিয়ন্ত্রণ করতে হয়

// ভালো practice: always hide sensitive data ** Banking system er khetre emn hoi
