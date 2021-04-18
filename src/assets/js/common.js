function goto(url) {
  window.open(url, '_blank');
}

function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
      obj.addEventListener(evt, fn, false);
  }
  else if (obj.attachEvent) {
      obj.attachEvent("on" + evt, fn);
  }
}
