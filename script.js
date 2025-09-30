const person = {
    name: 'Hena',
    age: 20,
    friends: ["Rimon", "Faruk", "Salma"],
    details: {
        job: 'Yes',
        isMarried: true,
        status: 'Not-Found',
        father: {
            name: 'Habibur Rahman'
        }
    }
}

//console.log(person.name);
// console.log(person.friends[1]); output:Faruk
// console.log(person.details.job);
//console.log(person.details.father.name);
console.log(person.details.mother?.name); // jeheto mother name e kichu nei seheto ? optional chaining na dile error dibe ete kore amader website crash korbe sejonno ? dile undefined dibe