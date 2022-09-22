const header = document.querySelector("header")
window.addEventListener("scroll",()=>{
  if(window.scrollY > 60){
    header.style.backgroundColor  = "black"
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

const itemCards = document.querySelector(".swiper-wrapper")

const cardsPage = async () => {
  const cards = []
  const res = await axios.get("https://sabina-18218-default-rtdb.firebaseio.com/page.json")
  const data = await res.data
  for (let key in data) {
      cards.push(data[key])
  }
  return cards
}

cardsPage().then(res => {
  res.map(card => {
      itemCards.innerHTML += `
      <div class="swiper-slide">
      <figure>
        <img src=${card.image} alt="">
      </figure>
      <div class="item-card--body">
        <h3>${card.name}</h3>
        <p>
        ${card.title}
        </p>
      </div>
      <div class="button">
        <button><a href="/menu/additional/planning/planning.html">Read</a></button>
      </div>
    </div>
      
      `
  })
}
).catch(err => console.log(err))