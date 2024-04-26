// Map in JavaScript => it is used when we want to transform the elements of an array in some way.

let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((val)=>{
    return val * 2; // [2, 4, 6, 8, 10]
})

console.log(arr); // [1, 2, 3, 4, 5]
console.log(newArr); // [2, 4, 6, 8, 10]


// Filter in JS => it is used when we want to filter out some elements 

let filteredArr = arr.filter((val)=>{
    if(val > 2){
        return true; 
    } else return false; 
})

console.log(filteredArr); // [3, 4, 5]


// Find in JS => it is used when we want to find the first element that satisfies the condition

let findArr = arr.find((val)=>{
    if(val == 3){
        return val; 
    }
})
 
console.log(findArr);


// indexOf: it is used when we need to find index of any values in array 
console.log(arr.indexOf(4)); //if found return index else -1



//Objects: it is collection of key pair values 

let obj = {
    name: "Dinesh",
    age: 22, 
    text: function(){
        return `Hii, Its me ${this.name} and my age is ${this.age}`
    }
}

 console.log(obj.text());
 console.log(obj.name);
 obj.name = 'Mahesh'
 console.log(obj["name"]);

 Object.freeze(obj) // now we cannot modify the obj


 // async await in JS => it is used to handle the asynchronous code in synchronous way 
//  -> iif code is of async type then that will be sent to side stack & run next code which is in queue in sync nature and when sync code gets completed then check weather async code is completed or not if completed then bring on main stack & then run it

async function fetchData(){
    let blob = await fetch('https://randomuser.me/api/');
    let ans = blob.json();
    console.log(ans.results[0].name.first);
}

fetchData(); // it will return promise object