//Page Index
window.onload = depart_general;

//variable « index » dans laquelle on met son tableau sur une seule ligne et avec des apostrophes à la place des guillemets
var index = "<table class='fondcouleur'><tr><td><a href='guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>";
//variable pour le menu boutique
var boutique = "<table class='fondcouleur'><tr><td><a href='../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>";
//variable pour le menu calendrier
var calendrier = "<table class='fondcouleur'><tr><td><a href='../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu concile
var concile = "<table class='fondcouleur'><tr><td><a href='../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu concile oecuménique
var concileoec = "<table class='fondcouleur'><tr><td><a href='../../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu
var const3 = "<table class='fondcouleur'><tr><td><a href='../../../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../../../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../../../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../../../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../../../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../../../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../../canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu
var intrullo = "<table class='fondcouleur'><tr><td><a href='../../../../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../../../../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../../../../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../../../../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../../../../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../../../../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../../../canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu concile local
var concileloc = "<table class='fondcouleur'><tr><td><a href='../../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu guide
var guide = "<table class='fondcouleur'><tr><td><a href='guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>";
//variable pour le menu livre
var livre = "<table class='fondcouleur'><tr><td><a href='../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu livre père Guettée
var livrepguettee = "<table class='fondcouleur'><tr><td><a href='../../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu livre père Guettée : Histoire de l'Eglise
var livrepguetteehisteglise = "<table class='fondcouleur'><tr><td><a href='../../../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../../../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../../livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../../../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../../../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../../../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../../../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu textes patristiques
var peres = "<table class='fondcouleur'><tr><td><a href='../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu vco
var vco = "<table class='fondcouleur'><tr><td><a href='../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu vidéo
var video = "<table class='fondcouleur'><tr><td><a href='../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu sous vidéo
var sousvideo = "<table class='fondcouleur'><tr><td><a href='../../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"
//variable pour le menu sous sous vidéo
var soussousvideo = "<table class='fondcouleur'><tr><td><a href='../../../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../../video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../../../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../../../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='../../../boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../../../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../../../canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>"

//création fonction
function depart_general() {
    if (document.getElementById("menu-index"))  {
        document.getElementById("menu-index").innerHTML = index;
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
    if (document.getElementById("menu-boutique")) {
        document.getElementById("menu-boutique").innerHTML = boutique;
    }
    if (document.getElementById("menu-calendrier")) {
        document.getElementById("menu-calendrier").innerHTML = calendrier;
    }
    if (document.getElementById("menu-concile")) {
        document.getElementById("menu-concile").innerHTML = concile;
    }
    if (document.getElementById("menu-concileoec")) {
        document.getElementById("menu-concileoec").innerHTML = concileoec;
    }
    if (document.getElementById("menu-const3")) {
        document.getElementById("menu-const3").innerHTML = const3;
    }
    if (document.getElementById("menu-intrullo")) {
        document.getElementById("menu-intrullo").innerHTML = intrullo;
    }
    if (document.getElementById("menu-concileloc")) {
        document.getElementById("menu-concileloc").innerHTML = concileloc;
    }
    if (document.getElementById("menu-guide")) {
        document.getElementById("menu-guide").innerHTML = guide;
    }
    if (document.getElementById("menu-livre")) {
        document.getElementById("menu-livre").innerHTML = livre;
    }
    if (document.getElementById("menu-livrepguettee")) {
        document.getElementById("menu-livrepguettee").innerHTML = livrepguettee;
    }
    if (document.getElementById("menu-livrepguetteehisteglise")) {
        document.getElementById("menu-livrepguetteehisteglise").innerHTML = livrepguetteehisteglise;
    }
    if (document.getElementById("menu-peres")) {
        document.getElementById("menu-peres").innerHTML = peres;
    }
    if (document.getElementById("menu-vco")) {
        document.getElementById("menu-vco").innerHTML = vco;
    }
    if (document.getElementById("menu-video")) {
        document.getElementById("menu-video").innerHTML = video;
    }
    if (document.getElementById("menu-sousvideo")) {
        document.getElementById("menu-sousvideo").innerHTML = sousvideo;
    }
    if (document.getElementById("menu-soussousvideo")) {
        document.getElementById("menu-soussousvideo").innerHTML = soussousvideo;
    }
}
