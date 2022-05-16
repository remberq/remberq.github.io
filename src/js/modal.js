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


let mainWidth = parseInt(getComputedStyle(main).width)
let widthWindow = document.documentElement.clientWidth
let rightPosition

window.onresize = () => {
  mainWidth = parseInt(getComputedStyle(main).width)
  widthWindow = document.documentElement.clientWidth
}

burger.onclick = function () {
  aside.classList.add('show--aside')
  overlay.classList.remove('hidden')

}

overlay.onclick = function () {
  aside.classList.remove('show--aside')
  modalPhone.style.right = '-200%'
  modalChat.style.right = '-200%'
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
  modalPhone.style.right = '-200%'
  modalPhone.classList.remove('show--modal')
  overlay.classList.add('hidden')
  body.style.overflow = 'visible'

}

chatExit.onclick = function () {
  modalChat.style.right = '-200%'
  modalChat.classList.remove('show--modal')
  overlay.classList.add('hidden')
  body.style.overflow = 'visible'

}

asidePhone.onclick = function () {
  rightPosition = (widthWindow - mainWidth) / 2
  modalPhone.style.right = `${rightPosition}px`
  modalPhone.classList.add('show--modal')
  aside.classList.remove('show--aside')
  overlay.classList.remove('hidden')

}

asideChat.onclick = function () {
  rightPosition = (widthWindow - mainWidth) / 2
  modalChat.style.right = `${rightPosition}px`
  modalChat.classList.add('show--modal')
  aside.classList.remove('show--aside')
  overlay.classList.remove('hidden')

}


const headerCall = header.querySelector('.header--call')
const headerChat = header.querySelector('.header--chat')


headerCall.onclick = function () {
  rightPosition = (widthWindow - mainWidth) / 2
  modalPhone.style.right = `${rightPosition}px`
  modalPhone.classList.add('show--modal')
  overlay.classList.remove('hidden')

}

headerChat.onclick = function () {
  rightPosition = (widthWindow - mainWidth) / 2
  modalChat.style.right = `${rightPosition}px`
  modalChat.classList.add('show--modal')
  overlay.classList.remove('hidden')

}


