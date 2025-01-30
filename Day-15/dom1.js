let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");

let gender = document.getElementsByName("gender");
// console.log(gender);

// ! hiding and showing the password
check.addEventListener("click" , (event)=>{
    // console.log(event.target.checked);
    if(event.target. checked == true){
        password.setAttribute("type" , "text");
        show. innerText = "hide password";
    }else{
        password.setAttribute("type" , "password");
        show. innerText="show password";

    }
})