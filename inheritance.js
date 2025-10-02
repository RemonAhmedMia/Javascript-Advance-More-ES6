// Inheritance কী?

// 👉 Inheritance মানে হলো উত্তরাধিকার।
// অর্থাৎ, একটা class (child class) অন্য একটা class (parent class) থেকে বৈশিষ্ট্য (property & method) নিতে পারে।

// এর ফলে –

// বারবার কোড লিখতে হয় না (code reusability)

// একটা class আরেকটার উপর ভিত্তি করে কাজ করতে পারে

// ============super() কী?

// যখন child class এর constructor থাকে, তখন parent class এর constructor কে call করতে super() ব্যবহার করতে হয়।

// =============================
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log(`${this.name} শব্দ করছে`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // parent এর constructor call
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} (${this.breed}) ঘেউ ঘেউ করছে`);
  }
}

const d1 = new Dog("Tommy", "German Shepherd");
d1.sound(); // Tommy শব্দ করছে  (parent থেকে পাওয়া)
d1.bark();  // Tommy (German Shepherd) ঘেউ ঘেউ করছে (নিজস্ব method)

// এখানে super(name) parent class Animal এর constructor কে কল করছে, যাতে this.name সেট হয়।


// ===========================

class Vehicales {
    constructor (name,price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log("ami cholachol korte pari");
        
    }
}
class Bus extends Vehicales {
    constructor (name,price,seat) {
        super (name,price);
        this.seat = seat;
    }
    route(){
        console.log("Dhaka To Cox-Bazar");
        
    }
}

class Truck extends Vehicales {
    constructor(name,price,load) {
        super(name,price);
        this.load=load;
    }
    weight(){
        console.log("Amr ojon 1000kg ha ha");
        
    }
}

const greenLine = new Bus('Greenline' , 129409854, 50);
console.log(greenLine);
greenLine.move()