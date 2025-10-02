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