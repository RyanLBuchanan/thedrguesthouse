/* global document */

// document.querySelector("html").onclick = function() {
//   alert("Sorry, I'm not quite functional, yet. Just give me a week or two, please.");
// }

var splashImage = document.querySelector('img');

splashImage.onclick = function() {
  var myImages = splashImage.getAttribute('src');
  if(myImages === 'images/gsthse_images/bdrm_rt.jpg') {
    splashImage.setAttribute ('src', 'images/gsthse_images/lvgrm_ktch.jpg');
  } else {
    splashImage.setAttribute ('src', 'images/gsthse_images/bdrm_rt.jpg');
  }
}


// var images = 3;
// var arrayImagesElement = document.getElementById("arrayImages");
//
// function createImageNode() {
//     var img = document.createElement('img');
//     img.src = "https://insider.directv.com/wp-content/uploads/2012/07/nemo_big.jpg";
//     img.width = "300";
//     img.style.margin = "15px";
//     return img;
// }
//
// for(var i = 0; i < images; i++){
//     arrayImagesElement.appendChild(createImageNode());
// };
