function showBanners() {
  var banners = document.getElementsByClassName('gt-banner');

  for (var i = 0; i < banners.length; i++) {
    banners[i].style.visibility = 'visible';
  }
}

function showModals() {
  var modals = document.getElementsByClassName('modal');

  for (var i = 0; i < modals.length; i++) {
    modals[i].classList.add("is-active");
  }
}

function hideModals() {
  var modals = document.getElementsByClassName('modal');

  for (var i = 0; i < modals.length; i++) {
    modals[i].classList.remove("is-active");
  }
}
