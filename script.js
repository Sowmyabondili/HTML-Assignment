// JavaScript for your existing HTML (HTML unchanged)

document.addEventListener("DOMContentLoaded",()=>{

const form=document.querySelector("form");
const name=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");

function validateEmail(v){
 return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

email.addEventListener("blur",()=>{
 if(validateEmail(email.value)){
   email.classList.add("valid");
   email.classList.remove("invalid");
 }else{
   email.classList.add("invalid");
   email.classList.remove("valid");
   if(email.value!=="") alert("Please enter a valid email address.");
 }
});

password.addEventListener("input",()=>{
 if(password.checkValidity()){
   password.classList.add("valid");
   password.classList.remove("invalid");
 }else{
   password.classList.add("invalid");
   password.classList.remove("valid");
 }
});

form.addEventListener("submit",function(e){
 e.preventDefault();
 if(form.checkValidity()){
   alert("Registration Successful! Welcome, "+name.value+"!");
   form.reset();
   document.querySelectorAll(".valid,.invalid").forEach(el=>{
     el.classList.remove("valid","invalid");
   });
 }else{
   alert("Please fill all required fields correctly.");
 }
});

});
