var link=document.querySelector(".about-us-contacts .btn"),popup=document.querySelector(".modal-content-feedback"),close=popup.querySelector(".modal-content-feedback .close"),myName=popup.querySelector(".input-name"),email=popup.querySelector(".input-email"),message=popup.querySelector(".input-message");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-content-show"),myName.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error")}),popup.addEventListener("submit",function(e){myName.value&&email.value&&message.value||(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-content-show")&&(popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error"))});var mapOpen=document.querySelector(".js-open-map"),mapPopup=document.querySelector(".modal-content-map"),mapClose=mapPopup.querySelector(".modal-content-map .close");mapOpen.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-content-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-content-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapPopup.classList.contains("modal-content-show")&&mapPopup.classList.remove("modal-content-show")});