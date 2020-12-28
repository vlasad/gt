function goto(url) {
  location.href = url;
}

function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
      obj.addEventListener(evt, fn, false);
  }
  else if (obj.attachEvent) {
      obj.attachEvent("on" + evt, fn);
  }
}
