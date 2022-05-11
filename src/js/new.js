const main = document.querySelector('.main-container')
const hero = main.querySelector('.hero')
const heroShowLink = hero.querySelector('.show-link')
const heroText = hero.querySelector('.hero__text-container')

//hero action

heroShowLink.onclick = function (evt) {
  let innerWidth = window.innerWidth
  if (evt.target.textContent === 'Читать далее') {
    heroText.style.overflow = 'visible'
    heroText.style.height = '100%'
    evt.target.textContent = 'Скрыть'
    heroShowLink.style.backgroundImage = 'url("../img/icon.png")'
  } else {
    heroText.style.overflow = 'hidden'
    heroText.style.height = innerWidth < 768 ? '90px' : '160px'
    evt.target.textContent = 'Читать далее'
    heroShowLink.style.backgroundImage = 'url("../img/down.png")'
  }
}

// brand action

const brand = main.querySelector('.brand')
const brandShowLink = brand.querySelector('.show-link')
const brandItems = brand.querySelector('.brand__items')

brandShowLink.onclick = function (evt) {

  if (evt.target.textContent === 'Показать все') {
    brandItems.style.overflow = 'visible'
    brandItems.style.height = '100%'
    evt.target.textContent = 'Скрыть'
    brandShowLink.style.backgroundImage = 'url("../img/icon.png")'
  } else {
    brandItems.style.overflow = 'hidden'
    brandItems.style.height = '160px'
    evt.target.textContent = 'Показать все'
    brandShowLink.style.backgroundImage = 'url("../img/down.png")'
  }
}


// repair action

const repair = main.querySelector('.repair')
const repairShowLink = repair.querySelector('.show-link')
const repairItems = repair.querySelector('.repair__items')

repairShowLink.onclick = function (evt) {
  if (evt.target.textContent === 'Показать все') {
    repairItems.style.overflow = 'visible'
    repairItems.style.height = '100%'
    evt.target.textContent = 'Скрыть'
    repairShowLink.style.backgroundImage = 'url("../img/icon.png")'
  } else {
    repairItems.style.overflow = 'hidden'
    repairItems.style.height = '160px'
    evt.target.textContent = 'Показать все'
    repairShowLink.style.backgroundImage = 'url("../img/down.png")'
  }
}
