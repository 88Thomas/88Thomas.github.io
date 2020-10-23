let im = document.images['clot'];
im.addEventListener('click', function() {
    let mySrc = im.getAttribute('src');
    if (mySrc === 'images/clotilde.jpg') {
      im.setAttribute('src', 'images/clovis.jpg');
    } else if (mySrc === 'images/clovis.jpg') {
      im.setAttribute('src', 'images/clotilde.jpg');
    } 
  });