const main = document.querySelector('.main-container')
const header = main.querySelector('.header')
const aside = main.querySelector('.aside')
const burger = header.querySelector('.burger')
const overlay = main.querySelector('.overlay')
const body = document.querySelector('body')
const asideExit = aside.querySelector('.aside__btn')
const asidePhone = aside.querySelector('.btn--call')
const asideChat = aside.querySelector('.btn--chat')
const modalPhone = main.querySelector('.phone')
const modalChat = main.querySelector('.chat')
const phoneExit = modalPhone.querySelector('.modal__btn')
const chatExit = modalChat.querySelector('.modal__btn')


burger.onclick = function () {
  aside.classList.add('show--aside')
  overlay.classList.remove('hidden')
  body.style.overflow = 'hidden'
}

overlay.onclick = function () {
  aside.classList.remove('show--aside')
  modalPhone.classList.remove('show--modal')
  modalChat.classList.remove('show--modal')
  overlay.classList.add('hidden')
  body.style.overflow = 'visible'
}

asideExit.onclick = function () {
  aside.classList.remove('show--aside')
  overlay.classList.add('hidden')
  body.style.overflow = 'visible'
}

phoneExit.onclick = function () {
  modalPhone.classList.remove('show--modal')
  overlay.classList.add('hidden')
  body.style.overflow = 'visible'
}

chatExit.onclick = function () {
  modalChat.classList.remove('show--modal')
  overlay.classList.add('hidden')
  body.style.overflow = 'visible'
}

asidePhone.onclick = function () {
  modalPhone.classList.add('show--modal')
  aside.classList.remove('show--aside')
  overlay.classList.remove('hidden')
  body.style.overflow = 'hidden'
}

asideChat.onclick = function () {
  modalChat.classList.add('show--modal')
  aside.classList.remove('show--aside')
  overlay.classList.remove('hidden')
  body.style.overflow = 'hidden'
}


const headerCall = header.querySelector('.header--call')
const headerChat = header.querySelector('.header--chat')


headerCall.onclick = function () {
  modalPhone.classList.add('show--modal')
  overlay.classList.remove('hidden')
  body.style.overflow = 'hidden'
}

headerChat.onclick = function () {
  modalChat.classList.add('show--modal')
  overlay.classList.remove('hidden')
  body.style.overflow = 'hidden'
}


