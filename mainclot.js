//Page Index
window.onload = depart_general;
//variable « index » dans laquelle tu mets ton tableau sur une seule ligne et avec des apostrophes à la place des guillemets
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
/*//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var
//variable pour le menu
var*/
//création fonction
function depart_general() {
    if (document.getElementById("menu-index"))  {
        document.getElementById("menu-index").innerHTML = index;
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
}
