const products = [
    {id:1 , name:'iPhone', price:1024857, brand: 'Apple', color: 'Black'},
    {id:2 , name:'xiaomi', price:34957, brand: 'Xiaomi', color: 'gold'},
    {id:3 , name:'Samsung', price:1057, brand: 'Sam', color: 'Gray'},
    {id:4 , name:'iPhone', price:14857, brand: 'Apple', color: 'gold'}
]

// forEach() কি?

// জাভাস্ক্রিপ্টে forEach() হলো Array method।

// এটা loop এর মতো কাজ করে, মানে অ্যারের প্রতিটি element-এর জন্য একটি ফাংশন চালায়।

// এটি value + index + array অ্যাক্সেস করতে পারে।

products.forEach(product=>{
    //console.log(product); tokhn sob gula product k dhekabe
    //jodi amra chai shodu gold color er product gula k dhekabe tahole,
    if (product.color === 'gold') {
        console.log(product);
    } else{
        console.log();
    }
})


// Find============

// find() কি?

// find() হলো Array method।

// এটা অ্যারের প্রতিটি element চেক করে।

// প্রথম যে element শর্ত (condition) মেনে নেয়, শুধু সেটা return করে।

// যদি কিছুই match না পায় → undefined return করে।

const songkha = [5, 10, 15, 20];

const firstGreaterThan10 = songkha.find(num => num > 10);

console.log(firstGreaterThan10); 
// Output: 15
// এখানে > 10 শর্তে প্রথম match হলো 15, তাই শুধু সেটাই পাওয়া গেছে।

const product = products.find(p=>p.id===3);
console.log(product);

// find() → প্রথম matching element return করে।

// না পেলে undefined দেয়।

// filter() এর মতো হলেও, filter() সবগুলো match দেয়, find() শুধু প্রথমটা দেয়।

// Parameters: (element, index, array)

const mal = [
  { id: 1, name: "Mobile" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Tablet" }
];

const newP = mal.filter(p => p.id != 2);
console.log(newP);
