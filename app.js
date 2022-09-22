const header = document.querySelector("header")
const btn = document.querySelector (".btn")
const socialContent = document.querySelector(".social-content")
window.addEventListener("scroll",()=>{
  if(window.scrollY > 100){
    header.style.backgroundColor  = "black"
  }
  else if(window.scrollY < 100){
    header.style.backgroundColor  = "transparent"
  }
})

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
    header.style.backgroundColor  = "black"
    navBar.style.transition = "1.7s ease 3s"
  }
  else{
    mobilemenu.setAttribute("class","fa fa-bars")
    navBar.classList.remove("nav-active")
    header.style.backgroundColor  = "transparent"
    navBar.style.transition = "1.7s ease 3s"
  
  }
})

const teamCards = document.querySelector(".team-cards")


const teamPage = async () => {
  const teams = []
  const res = await axios.get("https://sabina-18218-default-rtdb.firebaseio.com/team.json")
  const data = await res.data
  for (let key in data) {
      teams.push(data[key])
  }
  return teams
}

teamPage().then(res => {
  res.map(team => {
      teamCards.innerHTML += `
      <div class="team-card">
      <p>${team.title}</p>
      <figure>
        <img src=${team.image} alt="">
      </figure>
      <h3>${team.name}</h3>
    </div>
      
      `
  })
}
).catch(err => console.log(err))

// const header = document.querySelector("header")
// window.addEventListener("scroll",()=>{
//   if(window.scrollY > 60){
//     header.style.backgroundColor  = "black"
//   }
//   else if(window.scrollY < 60){
//     header.style.backgroundColor  = "transparent"
//   }
// })

