// Your code goes here
const nav = document.querySelector('.nav')
const home = nav.querySelector('a:nth-of-type(1)')
const about = nav.querySelector('a:nth-of-type(2)')
const blog = nav.querySelector('a:nth-of-type(3)')
const contact = nav.querySelector('a:nth-of-type(4)')
const funBus = document.querySelector('.intro img')
const welcome = document.querySelector('.intro h2')
const textS = document.querySelectorAll('.text-content h2')
const destinationH2 = document.querySelector('.content-destination h2')
const destination = document.querySelector('.content-destination')
const destLocation = document.querySelectorAll('.destination h4')
const contentSection = document.querySelector('.content-section')
const contentSectionInverseContent = document.querySelector('.content-section:nth-of-type(2)')
const introP = document.querySelector('.intro p')

introP.addEventListener('focus', (e) => {
    introP.style.backgroundColor='yellow'
})
contentSection.addEventListener('mouseup', (e) => {
    contentSection.style.backgroundColor='yellow'
})
contentSectionInverseContent.addEventListener('scroll', (e) => {
    contentSectionInverseContent.style.backgroundColor='orange'
})

welcome.addEventListener('mouseup', (e) => {
    welcome.style.fontSize = "6rem"
    welcome.style.backgroundColor = "red";
    welcome.textContent='Welcome To Fun Bus! Hop on'
})

funBus.addEventListener('select',(e) => {
    funBus.getElementById("myDiv").style.padding = "50px 10px 20px 30px";
})

textS[0].addEventListener('dblclick', (e) => {
    textS[0].style.color = "blue"
    textS[0].style.fontSize = "5rem"
})

textS[1].addEventListener('mouseup', (e) => {
    textS[1].style.color = "purple"
    textS[1].style.fontSize = "5rem"
})

destination.addEventListener('mouseenter', (e) =>{
    destination.style.background = "green"
    destinationH2.style.background = "green"
    destinationH2.style.color='orange'
    destinationH2.style.fontSize = "5rem"
})

destination.addEventListener('mouseleave', (e) =>{
    destination.style.background = "white"
    destinationH2.style.background = "white"
    destinationH2.style.color='black'
})

destLocation[0].addEventListener('load',(e) =>{
    destLocation[0].style.color = "orange"
    destLocation[0].style.background = "green"
    destLocation[0].style.fontSize = "2rem"
})

destLocation[1].addEventListener('keydown',(e) =>{
    destLocation[1].style.color = "green"
    destLocation[1].style.background = "blue"
    destLocation[1].style.fontSize = "2rem"
})

destLocation[2].addEventListener('wheel',(e) =>{
    destLocation[2].style.color = "blue"
    destLocation[2].style.background = "brown"
    destLocation[2].style.fontSize = "2rem"
})
Array.from(document.links).forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });