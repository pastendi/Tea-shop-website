const navBtn = document.getElementById('nav-btn')
const navbar = document.getElementById('navbar')
const navClose = document.getElementById('nav-close')
const navLink = document.getElementsByClassName('nav-link')
const navItems = document.getElementById('nav-items')

navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav')
})
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav')
})
// for (let i = 0; i < navLink.length; i++) {
//   navLink[i].addEventListener('click', () => {
//     navbar.classList.remove('showNav')
//   })
// }

navItems.addEventListener('click', (e) => {
  navbar.classList.remove('showNav')
})
