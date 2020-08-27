/* global document */

// document.querySelector("html").onclick = function() {
//   alert("Sorry, I'm not quite functional, yet. Just give me a week or two, please.");
// }

var splashImage = document.querySelector('img');

splashImage.onclick = function() {
  var myImages = splashImage.getAttribute('src');
  if (myImages === 'images/gsthse_images/bdrm_rt.jpg') {
    splashImage.setAttribute ('src', 'images/gsthse_images/lvgrm_ktch.jpg');
  } else {
    splashImage.setAttribute ('src', 'images/gsthse_images/bdrm_rt.jpg');
  }

}


// var images = 14;
// var arrayImagesElement = document.getElementById("arrayImages");
//
// function createImageNode() {
//     var img = document.createElement('img');
//     img.src = "images/gsthse_images/bdrm_rt.jpg";
//     // img.width = "300";
//     // img.style.margin = "15px";
//     return img;
// }
//
// for(var i = 0; i < images; i++){
//     arrayImagesElement.appendChild(createImageNode());
// };


//
// else if {
//   splashImage.setAttribute ('src', 'images/gsthse_images/bdrm_lf.jpg');
// } else if {
//   splashImage.setAttribute ('src', 'images/gsthse_images/btrm_rt.jpg');
// } else if {
//   splashImage.setAttribute ('src', 'images/gsthse_images/btrm_on.jpg');
// } else if {
//   splashImage.setAttribute ('src', 'images/gsthse_images/btrm_lf.jpg');
// } else if {
//   splashImage.setAttribute ('src', 'images/gsthse_images/gstrm_lf.jpg');
// } else if {
//   splashImage.setAttribute ('src', 'images/gsthse_images/lvgrm_lf.jpg');
// } else if {
//   splashImage.setAttribute ('src', 'images/gsthse_images/lvgrm_ktch.jpg');
// } else if {
//   splashImage.setAttribute ('src', 'images/gsthse_images/ktch.jpg');
// } else if {
//   splashImage.setAttribute ('src', 'images/gsthse_images/dngrm.jpg');
// } else if {
//   splashImage.setAttribute ('src', 'images/gsthse_images/cmp_coffee.jpg');
// } else if {
//   splashImage.setAttribute ('src', 'images/gsthse_images/out_seat.jpg');
// } else if {
//   splashImage.setAttribute ('src', 'images/gsthse_images/bbq.jpg');
// } else {
//   splashImage.setAttribute ('src', 'images/gsthse_images/bdrm_rt.jpg');
// }
