function getEmSize(el) {
  // If you pass in an element ID then get a reference to the element
  if (typeof el == "string") el = document.getElementById(el);

  if (el !== null) {
    var tempDiv = document.createElement('div');
    tempDiv.style.height = '1em';
    el.appendChild(tempDiv);
    var emSize = tempDiv.offsetHeight;
    el.removeChild(tempDiv);
    return emSize;
  }
}