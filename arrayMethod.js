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