const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')
const modalClose = modal.querySelector('.search-close-switch')
const input = document.querySelector('input');


modalBtn.addEventListener('click', () => {
  modal.style.display = 'block'
})

modalClose.addEventListener('click', () => {
  modal.style.display = 'none'
})

input.addEventListener('click', () => {
  console.log(input.value);

})

