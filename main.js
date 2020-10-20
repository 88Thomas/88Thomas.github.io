let myImage = document.querySelector('img');
myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/franco.jpg') {
      myImage.setAttribute('src', 'images/jose-sanjurgo.jpg');
    } else {
      myImage.setAttribute('src', 'images/franco.jpg');
    }
});
