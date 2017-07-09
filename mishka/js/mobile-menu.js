var navMain = document.querySelector('.main-nav');
var navUser = document.querySelector('.user-nav');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--no-js');
navUser.classList.remove('user-nav--no-js');
navToggle.classList.remove('page-header__toggle--no-js');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('page-header__toggle--closed')) {
    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle--opened');
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navUser.classList.remove('user-nav--closed');
    navUser.classList.add('user-nav--opened');
  } else {
    navToggle.classList.add('page-header__toggle--closed');
    navToggle.classList.remove('page-header__toggle--opened');
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navUser.classList.add('user-nav--closed');
    navUser.classList.remove('user-nav--opened');
  }
});
