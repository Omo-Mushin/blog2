const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

const navToggle = document.querySelector('.nav-contents')
const links = document.querySelector('.links')
const linksContainer = document.querySelector('.nav-contents')
const  navBar = document.querySelector('.nav')

navToggle.addEventListener('click', function() 
{ // linksContainer.classList.toggle('show-links')
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    console.log(linksHeight)
})



const topLink = document.querySelector('.top-link')
window.addEventListener('scroll',() => {console.log(window.pageYOffset)
//if navBar.height//
const scrollHeight = window.pageYOffset
const navHeight = navBar.getBoundingClientRect().height
console.log(navHeight)
console.log(scrollHeight)
if (scrollHeight > navHeight) {
    navBar.classList.add('fixed-nav')
} else {
    navBar.classList.remove('fixed-nav')
} if (scrollHeight >500) {
    topLink.classList.add('show-link')
} else {topLink.classList.remove('show-link')}
})