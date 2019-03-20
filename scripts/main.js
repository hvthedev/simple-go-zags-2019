var image = document.querySelector('img.swapable');
var button = document.querySelector('button');
var cutting = false;

image.onclick = function() {
  var oldSrc = image.getAttribute('src');
  var newSrc = oldSrc;

  if (cutting) {
    if (oldSrc === 'images/rui-scissors-open.jpg') {
      newSrc = 'images/rui-scissors-closed.jpg';
    } else {
      newSrc = 'images/rui-scissors-open.jpg';
    }
  }
  
  image.setAttribute('src', newSrc);
}

button.onclick = function() {
  if (cutting) {
    image.setAttribute('src', 'images/rui.jpg');
    button.innerHTML = "Cut the net!";
    cutting = false;
  } else {
    image.setAttribute('src', 'images/rui-scissors-open.jpg');
    button.innerHTML = "Stop cutting";
    cutting = true;
  }  
}