// let users=['Sahil','Prudhvi','Manikanta','Sri Ram'];

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);

// let users=['Sahil','Prudhvi','Manikanta','Sri Ram'];

// users.map((user,i)=>{
//    console.log(user,i);
// })

// let x=users.map((user,i)=>{
//     return user;
// });
// console.log(x);

// let x=users.forEach((user,i)=>{
//     // console.log(user);
//     return user;
// });
// console.log(x);

// let userDetails = {
//     name :"Akshay",
//     age:22,
//     city:"Hyderabad",
// };
// console.log(userDetails);
// console.log(userDetails.name);

// console.log(userDetails.city);

//! nested object
// let userDetails = {
//     name :"Akshay",
//     age:22,
//    address:{
//     city:"Hyderabad",
//     area:"siddipet",
//     streetNo : 123,
//     pincode : {
//         pin1:123456,
//         pin2:654321
//     }
//    }
// };
// console.log(userDetails.name);
// console.log(userDetails.address.city);
// console.log(userDetails.address.pincode.pin1);

// ! create array of objects
// let user1 ={
//     name:"Sahil",
//     city:"Vijayawada"
// }

// let user2={
//     name:"Manikanta",
//     city:"Guntur"
// }

// let user3={
//     name:"Sri Ram",
//     city:"Khammam"
// }

// let user4={
//     name:"Prudhvi",
//     city:"Hyderabad"
// }

// console.log(user1.name);
// console.log(user2.name);

let userDetails =[
    {
        name:"Sahil",
        city:"Vijayawada"
    },
    {
        name:"Manikanta",
        city:"Guntur"
    },
    {
        name:"Sri Ram",
        city:"Khammam"
    },
    {
        name:"Prudhvi",
        city:"Hyderabad"
    }
];

userDetails.map((user)=>{
console.log(user.name);
})