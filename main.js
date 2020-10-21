let myImage = document.images['natio'];
myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'franco.jpg') {
      myImage.setAttribute('src', 'jose-sanjurgo.jpg');
    } else if (mySrc === 'jose-sanjurgo.jpg') {
      myImage.setAttribute('src', 'salazar.jpg');
    } else if (mySrc === 'salazar.jpg') {
      myImage.setAttribute('src', 'hitler.jpg');
    } else if (mySrc === 'salazar.jpg') {
      myImage.setAttribute('src', 'hitler.jpg');
    } else if (mySrc === 'hitler.jpg') {
      myImage.setAttribute('src', 'mussolini.jpg');
    } else if (mySrc === 'mussolini.jpg') {
      myImage.setAttribute('src', 'franco.jpg');
    } 
});
let myImage2 = document.images['juif'];
myImage2.addEventListener('click', function() {
    let mySrc = myImage2.getAttribute('src');
    if (mySrc === 'azana.jpg') {
      myImage2.setAttribute('src', 'staline.jpg');
    } else if (mySrc === 'staline.jpg') {
      myImage2.setAttribute('src', 'azana.jpg');
    }
  });