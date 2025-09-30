const numbers = [1,2,3,4,5,6];
let temp = [];
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    const sum = element + 1;
    temp.push(sum);
}
//console.log(temp);

// Eto boro code kore j kaj amra kori seta ekta kaj kore map diye kora jai map sob somoy ekta array return kore,

const newArray = numbers.map(value=>value+1);
console.log(newArray);

const num = [2,4,6,8,10,12,14,16,18,20];
const newSqure = num.map(element=>element*element);
console.log(newSqure);
// Output: [4, 16, 36, 64, 100, 144, 196, 256, 324, 400]


const friends = ['Rimon', 'Shakib'];

for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    console.log(element);
    //Ei eto boro code k choto kore map e likha jai
}

const newFriends = friends.map((element,index)=>{
    console.log(index);
    console.log(element);
    
})