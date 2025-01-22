let userData ={
    name:"Sahil",
    age:25,
    city:"Vijayawada"
};
console.log(userData.name , typeof(userData));

let x = JSON.stringify(userData);
console.log(x , typeof(x));

let y = JSON.parse(x);
console.log(y);