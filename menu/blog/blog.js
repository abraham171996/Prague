const header = document.querySelector("header")
window.addEventListener("scroll",()=>{
  if(window.scrollY > 60){
    header.style.backgroundColor  = "white"
  }
  else if(window.scrollY < 60){
    header.style.backgroundColor  = "transparent"
  }
})

const btn = document.querySelector (".btn")
const socialContent = document.querySelector(".social-content")


btn.addEventListener("click",()=>{
  socialContent.classList.toggle("active")
})



const navBar = document.querySelector(".nav-bar")
const menuBtn = document.querySelector(".menu-btn")
const mobilemenu = document.querySelector("#mobilemenu")


mobilemenu.addEventListener("click",()=>{
  if(mobilemenu.getAttribute("class")== "fa fa-bars"){
    mobilemenu.setAttribute("class","fa fa-close")
    navBar.classList.add("nav-active")
    header.style.backgroundColor  = "white"
    navBar.style.transition = "1.7s ease 3s"
  }
  else{
    mobilemenu.setAttribute("class","fa fa-bars")
    navBar.classList.remove("nav-active")
    header.style.backgroundColor  = "transparent"
    navBar.style.transition = "1.7s ease 3s"
  
  }
})