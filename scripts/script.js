// var myHeading = document.querySelector('h1')
//
// myHeading.textContent = 'Living the Dream!';

document.querySelector("html").onclick = function() {
  alert("Sorry, I'm not quite functional, yet. Just give me a week or two, please.");
}

var gsthseImage = document.querySelector('img');

gsthseImage.onclick = function () {
  var myImages = gsthseImage.getAttribute('src');
  if(myImages === 'images/bdrm_on.jpg') {
    gsthseImage.setAttribute ('src', 'images/lvgrm_ktch.jpg');
  } else {
    gsthseImage.setAttribute ('src', 'images/bdrm_rt.jpg');
  }
}
