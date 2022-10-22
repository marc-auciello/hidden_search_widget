const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
   // adds .active class to btn tag
   search.classList.toggle('active')
   // .focus puts the curser in the search box
   input.focus()
})