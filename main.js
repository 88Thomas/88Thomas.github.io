let myImage = document.querySelector('img');
myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'BrocanteLuzy.github.io/franco.jpg') {
      myImage.setAttribute('src', 'BrocanteLuzy.github.io/jose-sanjurgo.jpg');
    } else {
      myImage.setAttribute('src', 'BrocanteLuzy.github.io/franco.jpg');
    }
});
