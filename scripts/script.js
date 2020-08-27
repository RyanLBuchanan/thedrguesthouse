/* global document */

// document.querySelector("html").onclick = function() {
//   alert("Sorry, I'm not quite functional, yet. Just give me a week or two, please.");
// }

var splashImage = document.querySelector('img');

splashImage.onclick = function() {
  var myImages = splashImage.getAttribute('src');
  if(myImages === 'images/bdrm_rt.jpg') {
    splashImage.setAttribute ('src', 'images/lvgrm_ktch.jpg');
  } else {
    splashImage.setAttribute ('src', 'images/bdrm_rt.jpg');
  }
}
