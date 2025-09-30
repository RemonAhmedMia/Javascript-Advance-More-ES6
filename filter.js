const ponno = [
    {id:1 , name:'iPhone', price:1024857, brand: 'Apple', color: 'Black'},
    {id:2 , name:'xiaomi', price:34957, brand: 'Xiaomi', color: 'gold'},
    {id:3 , name:'Samsung', price:1057, brand: 'Sam', color: 'Gray'},
    {id:4 , name:'iPhone', price:14857, brand: 'Apple', color: 'gold'}
]

// filter() কি?

// filter() হলো Array method।
// এটি একটি নতুন array রিটার্ন করে।
// শর্ত (condition) অনুযায়ী যে element-গুলো true হয়, শুধু সেগুলো রাখে।

const newProducts = ponno.filter(product=>product.price>100000);
console.log(newProducts);
