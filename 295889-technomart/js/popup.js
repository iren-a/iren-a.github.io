var link = document.querySelector(".about-us-contacts .btn");
var popup = document.querySelector(".modal-content-feedback");
var close = popup.querySelector(".modal-content-feedback .close");
var myName = popup.querySelector(".input-name");
var email = popup.querySelector(".input-email");
var message = popup.querySelector(".input-message");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  myName.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

popup.addEventListener("submit", function(event) {
  if (!myName.value || !email.value || !message.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-map .close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
    }
  }
});
