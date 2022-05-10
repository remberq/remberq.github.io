const header = document.querySelector('.header')
const burger = header.querySelector('.burger')
const aside = document.querySelector('.aside')
const asideClose = aside.querySelector('.aside__btn')
const body = document.querySelector('body')
const wrapper = body.querySelector('.wrapper')

document.onclick = (evt) => {
  if (evt.target.className !== 'aside' && evt.target.className !== 'burger') {
    aside.classList.remove('show--aside')
    body.style.overflow = 'visible'
    wrapper.style.opacity = '1'
  }
}

burger.addEventListener('click', () => {
  aside.classList.add('show--aside')
  body.style.overflow = 'hidden'
  wrapper.style.opacity = '0.05'
})

asideClose.addEventListener('click', (evt) => {
  aside.classList.remove('show--aside')
  body.style.overflow = 'visible'
  wrapper.style.opacity = '1'

})

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    aside.classList.remove('show--aside')
    body.style.overflow = 'visible'
    wrapper.style.opacity = '1'
  }
})


const asideCall = aside.querySelector('.btn--call')
const modalPhone = document.querySelector('.phone')
const closeModalPhone = modalPhone.querySelector('.modal__btn')

asideCall.onclick = (evt) => {
  aside.classList.remove('show--aside')
  body.style.overflow = 'hidden'
  wrapper.style.opacity = '0.05'
  modalPhone.classList.add('show--modal')
}

closeModalPhone.onclick = () => {
  modalPhone.classList.remove('show--modal')
  body.style.overflow = 'visible'
  wrapper.style.opacity = '1'
}



const asideChat = aside.querySelector('.btn--chat')
const modalChat = document.querySelector('.chat')
const closeModalChat = modalChat.querySelector('.modal__btn')

asideChat.onclick = () => {
  aside.classList.remove('show--aside')
  body.style.overflow = 'hidden'
  wrapper.style.opacity = '0.05'
  modalChat.classList.add('show--modal')
}

closeModalChat.onclick = () => {
  modalChat.classList.remove('show--modal')
  body.style.overflow = 'visible'
  wrapper.style.opacity = '1'
}



const headerCall = document.querySelector('.header--call')
const headerChat = document.querySelector('.header--chat')

headerCall.onclick = () => {
  body.style.overflow = 'hidden'
  wrapper.style.opacity = '0.05'
  modalPhone.classList.add('show--modal')
}

headerChat.onclick = () => {
  body.style.overflow = 'hidden'
  wrapper.style.opacity = '0.05'
  modalChat.classList.add('show--modal')
}

const heroNav = document.querySelector('.hero__nav-items')
const heroNavItem = document.querySelectorAll('.hero__item')

heroNav.onclick = (evt) => {

  let target = evt.target

  if (target.classList === 'hero__item') {
    for (let item of heroNavItem) {
      item.classList.remove('item--active')
    }
    target.classList.add('item--active')
  }
}


