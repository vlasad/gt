function showBanners() {
  var banners = document.getElementsByClassName('gt-banner');

  for (var i = 0; i < banners.length; i++) {
    banners[i].style.visibility = 'visible';
  }
}