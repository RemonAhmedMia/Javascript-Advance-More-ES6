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