!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){"use strict";o.r(t);o(2),o(3),o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11),o(12),o(13),o(14),o(15),o(16),o(17),o(18);console.log("Works!")},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t){new Swiper(".brand--swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1.3,spaceBetween:16,speed:600}),new Swiper(".swiper--repair",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1.3,spaceBetween:16,speed:600}),new Swiper(".price--swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1.2},400:{slidesPerView:1.5},500:{slidesPerView:2},600:{slidesPerView:2.2},700:{slidesPerView:2.8}},spaceBetween:16,speed:600})},function(e,t){document.querySelector(".strange").onclick=function(){window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley")}},function(e,t){var o=document.querySelector(".main-container"),n=o.querySelector(".hero"),i=n.querySelector(".show-link"),r=n.querySelector(".hero__text-container");i.onclick=function(e){var t=window.innerWidth;"Читать далее"===e.target.textContent?(r.style.overflow="visible",r.style.height="100%",e.target.textContent="Скрыть",i.style.backgroundImage='url("../img/icon.png")'):(r.style.overflow="hidden",r.style.height=t<768?"90px":"160px",e.target.textContent="Читать далее",i.style.backgroundImage='url("../img/down.png")')};var l=o.querySelector(".brand"),s=l.querySelector(".show-link"),c=l.querySelector(".brand__items");s.onclick=function(e){"Показать все"===e.target.textContent?(c.style.overflow="visible",c.style.height="100%",e.target.textContent="Скрыть",s.style.backgroundImage='url("../img/icon.png")'):(c.style.overflow="hidden",c.style.height="160px",e.target.textContent="Показать все",s.style.backgroundImage='url("../img/down.png")')};var a=o.querySelector(".repair"),d=a.querySelector(".show-link"),u=a.querySelector(".repair__items");d.onclick=function(e){"Показать все"===e.target.textContent?(u.style.overflow="visible",u.style.height="100%",e.target.textContent="Скрыть",d.style.backgroundImage='url("../img/icon.png")'):(u.style.overflow="hidden",u.style.height="160px",e.target.textContent="Показать все",d.style.backgroundImage='url("../img/down.png")')}},function(e,t){var o=document.querySelector(".main-container"),n=o.querySelector(".header"),i=o.querySelector(".aside"),r=n.querySelector(".burger"),l=o.querySelector(".overlay"),s=document.querySelector("body"),c=i.querySelector(".aside__btn"),a=i.querySelector(".btn--call"),d=i.querySelector(".btn--chat"),u=o.querySelector(".phone"),f=o.querySelector(".chat"),y=u.querySelector(".modal__btn"),w=f.querySelector(".modal__btn");r.onclick=function(){i.classList.add("show--aside"),l.classList.remove("hidden"),s.style.overflow="hidden"},l.onclick=function(){i.classList.remove("show--aside"),u.classList.remove("show--modal"),f.classList.remove("show--modal"),l.classList.add("hidden"),s.style.overflow="visible",s.style.overflowX="hidden"},c.onclick=function(){i.classList.remove("show--aside"),l.classList.add("hidden"),s.style.overflow="visible"},y.onclick=function(){u.classList.remove("show--modal"),l.classList.add("hidden"),s.style.overflow="visible",s.style.overflowX="hidden"},w.onclick=function(){f.classList.remove("show--modal"),l.classList.add("hidden"),s.style.overflow="visible",s.style.overflowX="hidden"},a.onclick=function(){u.classList.add("show--modal"),i.classList.remove("show--aside"),l.classList.remove("hidden"),s.style.overflow="hidden"},d.onclick=function(){f.classList.add("show--modal"),i.classList.remove("show--aside"),l.classList.remove("hidden"),s.style.overflow="hidden"};var h=n.querySelector(".header--call"),p=n.querySelector(".header--chat");h.onclick=function(){u.classList.add("show--modal"),l.classList.remove("hidden"),s.style.overflow="hidden"},p.onclick=function(){f.classList.add("show--modal"),l.classList.remove("hidden"),s.style.overflow="hidden"}}]);
//# sourceMappingURL=bundle.js.map