let save = window.localStorage.getItem("firstname")
let save2 = window.localStorage.getItem("middle")
let save3 = window.localStorage.getItem("last")
let save4 = window.localStorage.getItem("address")
let save5 = window.localStorage.getItem("email")
let save6 = window.localStorage.getItem("number")
let save7 = window.localStorage.getItem("second_number");
let save8 = window.localStorage.getItem("second_email");

document.getElementById("name").innerHTML = `${save} ${save2} ${save3}`;
document.getElementById("address").innerHTML = save4 ;
document.getElementById("phone-numbers").innerHTML =`${save6}  ${save7}`;
document.getElementById("emails").innerHTML = `${save5}  ${save8}` ;

