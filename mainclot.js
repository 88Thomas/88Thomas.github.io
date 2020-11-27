//Page Index
window.onload = depart_general;

//variable pour le menu sous dossier
var sdossier = "<table class='fondcouleur'><tr><td><a href='../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>";
//variable pour le menu sous sous dossier
var ssdossier = "<table class='fondcouleur'><tr><td><a href='../../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu sous sous sous dossier
var sssdossier = "<table class='fondcouleur'><tr><td><a href='../../../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../../../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../../../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../../../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../../../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../../../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../../../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu sous sous sous sous dossier
var ssssdossier = "<table class='fondcouleur'><tr><td><a href='../../../../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../../../../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../../../../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../../../../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../../../../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../../../../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../../../../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu sous sous sous sous sous dossier
var sssssdossier = "<table class='fondcouleur'><tr><td><a href='../../../../../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../../../../../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../../../../../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../../../../../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../../../../../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../../../../../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../../../../../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"

//création fonction
function depart_general() {
    if (document.getElementById("menu-index"))  {
        let im = document.images['clot'];
        im.addEventListener('click', function() {
            let mySrc = im.getAttribute('src');
            if (mySrc === 'images/clotilde.jpg') {
              im.setAttribute('src', 'images/clovis.jpg');
            } else if (mySrc === 'images/clovis.jpg') {
              im.setAttribute('src', 'images/clotilde.jpg');
            } 
          });
    }
    if (document.getElementById("menu-sdossier")) {
        document.getElementById("menu-sdossier").innerHTML = sdossier;
    }
    if (document.getElementById("menu-ssdossier")) {
        document.getElementById("menu-ssdossier").innerHTML = ssdossier;
    }
    if (document.getElementById("menu-sssdossier")) {
        document.getElementById("menu-sssdossier").innerHTML = sssdossier;
    }
    if (document.getElementById("menu-ssssdossier")) {
        document.getElementById("menu-ssssdossier").innerHTML = ssssdossier;
    }
    if (document.getElementById("menu-sssssdossier")) {
        document.getElementById("menu-sssssdossier").innerHTML = sssssdossier;
    }
}
