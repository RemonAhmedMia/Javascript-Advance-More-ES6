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
console.log(person.details.mother?.name); // jeheto mother name e kichu nei seheto ? optional chaining na dile error dibe ete kore amader website crash korbe sejonno ? dile undefined dibe.


// Bracket Notation==========

// জাভাস্ক্রিপ্টে অবজেক্ট (Object) এবং অ্যারে (Array)-এর ডেটা অ্যাক্সেস করার জন্য দুইভাবে লেখা যায়:

// Dot Notation → obj.key
// Bracket Notation → obj["key"]
// অর্থাৎ Bracket Notation মানে হচ্ছে square bracket [] ব্যবহার করে ডেটা অ্যাক্সেস করা।

console.log(person['name']);
console.log(person["details"] ["job"]);