let myImage = document.querySelector('img');
myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'franco.jpg') {
      myImage.setAttribute('src', 'jose-sanjurgo.jpg');
    } else {
      myImage.setAttribute('src', 'franco.jpg');
    }
});
